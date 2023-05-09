import { makeAutoObservable } from 'mobx';
import {
  createTodoAPI, updateTodoAPI, deleteTodoAPI, getTodosAPI,
} from '../utils/http/todosAPI';

class TodosStore {
  constructor() {
    this._todos = [];

    makeAutoObservable(this);
  }

  async getTodosWithInterval(interval) {
    const data = await getTodosAPI(interval);

    this.setTodo(data);
  }

  async createTodo(todoData, setIsVisible) {
    try {
      const data = await createTodoAPI(todoData);
      this.setTodo([...this.todos, data]);
      setIsVisible(false);
    } catch (e) {
      throw { error: e.response.data.message };
    }
  }

  async getTodos() {
    const data = await getTodosAPI();
    this.setTodo(data);
  }

  async updateTodoHandler(id, todoData, setIsVisibleUpdate) {
    try {
      const filteredTodos = this._todos.filter((todo) => todo.id !== id);

      const data = await updateTodoAPI(id, todoData);

      this.setTodo([...filteredTodos, data]);
      setIsVisibleUpdate(false);
    } catch (e) {
      throw { error: e.response.data.message };
    }
  }

  async deleteTodo(id) {
    try {
      const filteredTodos = this._todos.filter((todo) => todo.id !== id);

      await deleteTodoAPI(id);
      this.setTodo(filteredTodos);
    } catch (e) {
      throw { error: e.response.data.message };
    }
  }

  setTodo(todo) {
    this._todos = todo;
  }

  get todos() {
    return this._todos;
  }
}

export {
  TodosStore,
};
