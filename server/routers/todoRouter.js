const express = require('express');
const { checkTokenMiddleware } = require('../middlewares/checkTokenMiddleware');
const { createTodoValidation } = require('../validations/createTodoValidation');
const { createTodoController } = require('../controllers/todoControllers/createTodoController');
const { getTodosController } = require('../controllers/todoControllers/getTodosController');
const { updateTodoController } = require('../controllers/todoControllers/updateTodoController');
const { deleteTodoController } = require('../controllers/todoControllers/deleteTodoController');

const router = express.Router();

router
  .use(checkTokenMiddleware)
  .route('/')
  .post(createTodoValidation, createTodoController)
  .get(getTodosController)
  .patch(updateTodoController)
  .delete(deleteTodoController);

module.exports = router;
