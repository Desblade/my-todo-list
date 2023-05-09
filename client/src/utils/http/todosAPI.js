import { $host } from './http';

export const createTodoAPI = async (todoData) => {
  const { data } = await $host.post('/todo/', todoData);

  return data;
};

export const getTodosAPI = async (interval) => {
  const { data } = await $host.get('/todo/', { params: { interval } });

  return data;
};

export const deleteTodoAPI = async (id) => {
  await $host.delete('/todo/', { params: { id } });
};

export const updateTodoAPI = async (id, todoData) => {
  const { data } = await $host.patch('/todo/', todoData, { params: { id } });

  return data;
}