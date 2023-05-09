const { body } = require('express-validator');

const createTodoValidation = [
  body('title')
    .exists({ checkFalsy: true })
    .isString()
    .isLength({ min: 3, max: 25 }),
  body('description')
    .exists({ checkFalsy: true })
    .isString()
    .isLength({ min: 5 }),
  body('endtime')
    .exists({ checkFalsy: true })
    .isDate(),
  body('priority')
    .exists({ checkFalsy: true })
    .isIn(['Высокий', 'Средний', 'Низкий']),
  body('status')
    .exists({ checkFalsy: true })
    .isIn(['К выполнению', 'Выполняется', 'Выполнена', 'Отменена']),
];

module.exports = {
  createTodoValidation,
};
