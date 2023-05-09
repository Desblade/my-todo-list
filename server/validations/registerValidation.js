const { body } = require('express-validator');

const userRegisterValidation = [
  body('name')
    .exists({ checkFalsy: true })
    .isString(),
  body('surname')
    .exists({ checkFalsy: true })
    .isString()
    .isLength({ min: 3 }),
  body('fatherhood')
    .optional()
    .isString()
    .isLength({ min: 5 }),
  body('login')
    .exists({ checkFalsy: true })
    .isString()
    .isLength({ min: 5 }),
  body('password')
    .exists({ checkFalsy: true })
    .isString()
    .isLength({ min: 7 }),
  body('roles')
    .exists({ checkFalsy: true })
    .isIn(['user', 'manager']),
];

module.exports = {
  userRegisterValidation,
};
