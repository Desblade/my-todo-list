import React, { useContext } from 'react';
import {
  Box, Button, Card, Modal, Typography,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../index';
import { toast } from 'react-toastify';
import styles from './index.module.css';

const ModalForDeleteTodo = observer(({ isVisibleConfirm, setIsVisibleConfirm, id }) => {
  const { todos } = useContext(Context);

  const deleteTodoHandler = async (id) => {
    try {
      await todos.deleteTodo(id);
    } catch (e) {
      return toast(e.error);
    }
  }

  return (
    <Modal open={isVisibleConfirm}>
      <Box
        className={styles.box}
        onClick={() => setIsVisibleConfirm(false)}
      >
        <Card
          className={styles.card}
          onClick={(event) => { event.stopPropagation(); }}
        >
          <Typography>Вы действительно хотите удалить задачу?</Typography>
          <Box className={styles.boxForButtons}>
            <Button color="error" onClick={() => deleteTodoHandler(id)}>Да</Button>
            <Button color="success" onClick={() => setIsVisibleConfirm(false)}>Нет</Button>
          </Box>
        </Card>
      </Box>
    </Modal>
  );
});
export {
  ModalForDeleteTodo,
};
