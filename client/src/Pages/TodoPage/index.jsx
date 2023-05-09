import React, { useContext, useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { ToastContainer } from 'react-toastify';
import { Context } from '../../index';
import { ModalForCreateTodo } from '../../Components/modals/ModalForCreateTodo';
import { TodoList } from '../../Components/TodoList';
import { ControlPanel } from '../../Components/ControlPanel';
import styles from './index.module.css';

const TodoPage = observer(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleResponsible, setIsVisibleResponsible] = useState(false);
  const { todos, user } = useContext(Context);
  const [alignment, setAlignment] = useState('');

  useEffect(() => {
    todos.getTodos().then(() => {
      user.setResponsibles();
    });
  }, []);

  const handleAlignment = (event, alignment) => {
    setAlignment(alignment);
  };

  const handlerForModalCreate = async (todoData) => {
    await todos.createTodo(todoData, setIsVisible);
  };

  const handleGetTodos = async (interval) => {
    await todos.getTodosWithInterval(interval);
  };

  return (
    <Container className={styles.container}>
      <ControlPanel
        alignment={alignment}
        handleAlignment={handleAlignment}
        handleGetTodos={handleGetTodos}
        isVisibleResponsible={isVisibleResponsible}
        setIsVisibleResponsible={setIsVisibleResponsible}
        setIsVisible={setIsVisible}
        user={user}
      />
      { todos.todos.length
        ? <TodoList isVisibleResponsible={isVisibleResponsible} />
        : (
          <Container className={styles.text}>
            <Typography variant="h2">Задачи не найдены!</Typography>
          </Container>
        )}
      <ModalForCreateTodo
        handlerForModalCreate={handlerForModalCreate}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        labelForButton="Создать"
      />
      <ToastContainer />
    </Container>
  );
});

export {
  TodoPage,
};
