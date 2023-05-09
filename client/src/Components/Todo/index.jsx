import React, { useContext, useState } from 'react';
import { Card } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { ModalForDeleteTodo } from '../modals/ModalForDeleteTodo';
import { CardInfo } from '../CardInfo';
import { ModalForCreateTodo } from '../modals/ModalForCreateTodo';
import { Context } from '../../index';
import { ButtonsForCards } from '../ButtonsForCards';
import styles from './index.module.css';

const Todo = observer(({
  id,
  title,
  description,
  endtime,
  priority,
  status,
  responsibleId,
  isVisibleResponsible,
}) => {
  const { todos } = useContext(Context);
  const newDate = new Date(endtime).toDateString();
  const [isVisibleConfirm, setIsVisibleConfirm] = useState(false);
  const [isVisibleUpdate, setIsVisibleUpdate] = useState(false);

  const handlerForUpdateTodo = async (id, todoData) => {
    await todos.updateTodoHandler(id, todoData, setIsVisibleUpdate);
  };

  return (
    <Card className={styles.card}>
      <CardInfo
        title={title}
        description={description}
        newDate={newDate}
        priority={priority}
        status={status}
        responsibleId={responsibleId}
        isVisibleResponsible={isVisibleResponsible}
      >
        <ButtonsForCards
          setIsVisibleConfirm={setIsVisibleConfirm}
          setIsVisibleUpdate={setIsVisibleUpdate}
        />
      </CardInfo>
      <ModalForDeleteTodo
        isVisibleConfirm={isVisibleConfirm}
        setIsVisibleConfirm={setIsVisibleConfirm}
        id={id}
      />
      <ModalForCreateTodo
        isVisibleUpdate={isVisibleUpdate}
        setIsVisible={setIsVisibleUpdate}
        id={id}
        labelForButton="Изменить"
        handlerForUpdateTodo={handlerForUpdateTodo}
      />
    </Card>
  );
});

export {
  Todo,
};
