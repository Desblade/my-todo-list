const { db } = require('../../db');
const { checkPermissions } = require('../../utils/checkPermissions');

const updateTodoController = async (req, res) => {
  try {
    const { id } = req.query;
    const {
      title, description, endtime, priority, status, responsibleId,
    } = req.body;
    const update = { updatedAt: new Date() };

    const todo = await db('todos')
        .select('creatorId')
        .where({ id })
        .first();

    if (!todo) {
      return res.status(404).json({ message: 'Не удалось найти задачу' })
    }

    const checkPermissionsForField = checkPermissions(req.user, todo);

    if (title) {
      if (checkPermissionsForField(title)) {
        update.title = title;
      } else {
        return res.status(400).json({ message: 'Вы не можете менять поле оглавления' })
      }
    }

    if (description) {
      if (checkPermissionsForField(description)) {
        update.description = description;
      } else {
        return res.status(400).json({ message: 'Вы не можете менять поле описания' })
      }
    }

    if (endtime) {
      if (checkPermissionsForField(endtime)) {
        update.endtime = endtime;
      } else {
        return res.status(400).json({ message: 'Вы не можете менять дату окончания' })
      }
    }

    if (priority) {
      if (checkPermissionsForField(priority)) {
        update.priority = priority;
      } else {
        return res.status(400).json({ message: 'Вы не можете менять приоритет' })
      }
    }

    if (status) {
      if (checkPermissionsForField(status)) {
        update.status = status;
      } else {
        return res.status(400).json({ message: 'Вы не можете менять статус' })
      }
    }

    if (responsibleId) {
      if (checkPermissionsForField(responsibleId)) {
        const responsible = await db('users')
            .select('managerId')
            .where({ id: responsibleId })
            .first();

        if (!responsible) {
          return res.status(404).json({ message: 'Данного пользователя не существует' });
        }

        if (responsible.managerId !== req.user.id) {
          return res.status(400).json({ message: 'Это не Ваш подчиненный' });
        }
        update.responsibleId = responsibleId;
      } else {
        return res.status(400).json({ message: 'Вы не можете подчиненного' })
      }
    }

    const updatedTodo = await db('todos')
        .where({ id })
        .update(update)
        .returning('*');

    return res.json(updatedTodo[0]);
  } catch (e) {
    console.error(e);

    return res.status(500).json({ message: 'Не удалось обновить задачу' });
  }
};

module.exports = {
  updateTodoController,
};
