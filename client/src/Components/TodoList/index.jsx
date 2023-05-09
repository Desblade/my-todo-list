import React, { useContext } from 'react';
import { Container } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { Todo } from '../Todo';
import styles from './TodoList.module.css';

const TodoList = observer(({ isVisibleResponsible }) => {
  const { todos } = useContext(Context);

  return (
    <Container className={styles.container}>
      { todos.todos.map(({
        id, title, description, endtime, priority, status, responsibleId,
      }) => (
        <Todo
          isVisibleResponsible={isVisibleResponsible}
          key={id}
          id={id}
          title={title}
          description={description}
          endtime={endtime}
          priority={priority}
          status={status}
          responsibleId={responsibleId}
        />
      ))}
    </Container>
  );
});

export {
  TodoList,
};
