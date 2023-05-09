const { db } = require('../../db');

const getTodosController = async (req, res) => {
  try {
    const { interval } = req.query;
    const userId = req.user.id;

    const query = db('todos as t')
      .select('t.*')
      .leftJoin('users as u1', 'u1.id', 't.creatorId')
      .leftJoin('users as u2', 'u2.id', 't.responsibleId')
      .orderBy('updatedAt', 'DESC')
      .where((builder) => builder
        .where('t.creatorId', userId)
        .orWhere('t.responsibleId', userId)
        .orWhere('u1.managerId', userId)
        .orWhere('u2.managerId', userId));

    if (interval) {
      if (interval === 'future') {
        query.whereRaw(`t.endtime > ?`, [db.fn.now()]);
      } else if (interval === '1d') {
        query.whereRaw(`t.endtime < ? + INTERVAL '1 day'`, [db.fn.now()]);
      } else if (interval === '7d') {
        query.whereRaw(`t.endtime < ? + INTERVAL '7 day'`, [db.fn.now()]);
      }
    }

    const allTodos = await query;

    return res.json(allTodos);
  } catch (e) {
    console.error(e);

    return res.status(500).json({ message: 'Не удалось получить задачи' });
  }
};

module.exports = {
  getTodosController,
};
