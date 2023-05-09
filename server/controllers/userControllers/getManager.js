const { db } = require('../../db');

const getManager = async (req, res) => {
    const managers = await db('users')
        .select(['id', 'name', 'surname'])
        .where({ roles: 'manager' });

    return res.json(managers);
};

module.exports = {
    getManager,
};
