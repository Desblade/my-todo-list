const { db } = require('../../db');

const deleteTodoController = async (req, res) => {
  try {
    const { id } = req.query;
    const { user } = req;
    const todo = await db('todos')
      .select('*')
      .where({ id })
      .first();

    if (!todo) {
      return res.status(404).json({ message: 'Задача не найдена' });
    }

    if (todo.creatorId === user.id || user.roles === 'manager') {
      await db('todos')
        .where({ id })
        .del();

      return res.sendStatus(200);
    }

    return res.status(400).json({ message: 'Вы не можете удалить эту задачу' });
  } catch (e) {
    console.error(e);

    return res.status(500).json({ message: 'Не удалось удалить задачу' });
  }
};

module.exports = {
  deleteTodoController,
};
