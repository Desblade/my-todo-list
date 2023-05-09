const { body } = require('express-validator');

const userLoginValidation = [
  body('login')
    .exists({ checkFalsy: true })
    .isString(),
  body('password')
    .exists({ checkFalsy: true })
    .isString(),
];

module.exports = {
  userLoginValidation,
};
