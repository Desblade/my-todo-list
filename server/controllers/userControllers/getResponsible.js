const { db } = require('../../db');

const getResponsible = async (req, res) => {
    const responsible = await db('users')
        .select(['id', 'name', 'surname'])
        .where({ managerId: req.user.id });

    return res.json(responsible);
};

module.exports = {
    getResponsible,
};
