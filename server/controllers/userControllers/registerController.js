const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { db } = require('../../db');
const { createToken } = require('../../utils/createToken');

const registerController = async (req, res) => {
    try {
        const {
            name, surname, fatherhood, login, password, roles, managerId,
        } = req.body;
        const errs = validationResult(req);

        const user = await db('users')
            .select('login')
            .where({ login })
            .first();

        if (!errs.isEmpty()) {
            return res.status(400).json({ message: 'Неправильно заполнены поля' });
        }

        if (user) {
            return res.status(400).json({ message: 'Данный пользователь уже существует' });
        }

        if (managerId) {
            const manager = await db('users')
                .select('id')
                .where({ id: managerId })
                .first();

            if (!manager) {
                return res.status(404).json({ message: 'Данного менеджера не существует' });
            }
        }

        const passwordHash = await bcrypt.hash(password, 5);

        const registerUser = await db('users')
            .insert({
                name,
                surname,
                fatherhood,
                login,
                password: passwordHash,
                roles,
                managerId,
            })
            .returning('*');

        const [userForToken] = registerUser;

        const token = await createToken({
            id: userForToken.id,
            login: userForToken.login,
            roles: userForToken.roles,
        });

        return res.json({ token });
    } catch (e) {
        console.error(e);

        return res.status(500).json({ message: 'Не удалось зарегестрироваться' });
    }
};

module.exports = {
    registerController,
};
