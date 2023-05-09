const { createToken } = require('../../utils/createToken');

const checkToken = async (req, res) => {
    const { user } = req;

    const token = await createToken({
        id: user.id,
        login: user.login,
        roles: user.roles,
    });

    return res.json({ token });
};

module.exports = {
    checkToken,
};
