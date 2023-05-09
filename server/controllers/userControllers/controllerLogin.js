const { validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const { db } = require('../../db');
const { createToken } = require('../../utils/createToken');

const controllerLogin = async (req, res) => {
    try {
        const { login, password } = req.body;
        const errs = validationResult(req);
        const candidate = await db('users')
            .select('*')
            .where({ login })
            .first();

        if (!errs.isEmpty()) {
            return res.status(400).json({ message: 'Заполните все поля' });
        }

        if (!candidate) {
            return res.status(400).json({ message: 'Неправильный логин или пароль' });
        }

        const comparePassword = await bcrypt.compare(password, candidate.password);

        if (!comparePassword) {
            return res.status(400).json({ message: 'Неправильный логин или пароль' });
        }

        const token = await createToken({
            id: candidate.id,
            login: candidate.login,
            roles: candidate.roles,
        });

        return res.json({ token });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Не удалось авторизоваться' });
    }
};

module.exports = {
    controllerLogin,
};
