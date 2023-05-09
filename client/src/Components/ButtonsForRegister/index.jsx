import React from 'react';
import { Button, Container } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTER_ROUTE } from '../../utils/consts';
import styles from './index.module.css';

const ButtonsForRegister = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Container className={styles.container}>
      { location.pathname === LOGIN_ROUTE
        ? <Button onClick={() => navigate(REGISTER_ROUTE)} size={'large'}>Регистрация</Button>
        : <Button onClick={() => navigate(LOGIN_ROUTE)} size={'large'}>Уже есть аккаунт?</Button>
      }
    </Container>
  );
};

export {
  ButtonsForRegister
};