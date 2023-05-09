import React, { useContext } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { LOGIN_ROUTE, TODO_ROUTE } from '../../utils/consts';
import { Context } from '../../index';
import styles from './index.module.css';

const ErrorPage = observer(() => {
  const navigate = useNavigate();
  const { user } = useContext(Context);

  return (
    <Container className={styles.container}>
      <Typography variant="h2">Вы перешли по неправильной ссылке!</Typography>
      {user.isAuth
        ? (
          <Button
            onClick={() => navigate(TODO_ROUTE)}
            fullWidth
            size={'large'}
          >
            Вернуться на главную
          </Button>
        )
        : (
          <Button
            onClick={() => navigate(LOGIN_ROUTE)}
            fullWidth
            size={'large'}
          >
            Вернуться на главную
          </Button>
        )}
    </Container>
  );
});

export {
  ErrorPage,
};
