const { validationResult } = require('express-validator');
const { db } = require('../../db');

const createTodoController = async (req, res) => {
  try {
    const errs = validationResult(req);
    const {
      title, description, endtime, priority, status, responsibleId,
    } = req.body;
    const creatorId = req.user.id;

    if (!errs.isEmpty()) {
      return res.status(400).json({ message: 'Заполните все поля' });
    }

    if (responsibleId) {
      const responsible = await db('users')
        .select('managerId')
        .where({ id: responsibleId })
        .first();

      if (!responsible) {
        return res.status(404).json({ message: 'Данный пользователь не найден' });
      }

      if (creatorId !== responsible.managerId) {
        return res.status(400).json({ message: 'Данный пользователь не ваш подчиненный' });
      }
    }

    const createdTodo = await db('todos')
      .insert({
        title,
        description,
        endtime: new Date(endtime),
        priority,
        status,
        creatorId,
        responsibleId,
      })
      .returning('*');

    return res.json(createdTodo[0]);
  } catch (e) {
      console.error(e);

    return res.status(500).json({ message: 'Не удалось создать задачу' });
  }
};

module.exports = {
  createTodoController,
};
