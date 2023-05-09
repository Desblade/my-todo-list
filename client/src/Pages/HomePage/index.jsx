import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container className={styles.container}>
      <Typography variant={'h2'}>
        Добро пожаловать в Ваш персональный список дел
      </Typography>
        <Typography variant={'h5'}>
          <em>Пройдите авторизацию или зарегестрируйтесь чтобы пользоваться приложением</em>
        </Typography>
        <Button onClick={() => navigate('/login')} fullWidth size={'large'} variant="text"><Typography fontSize={'25px'}>
          Авторизация
        </Typography></Button>
    </Container>
  )};
export {
  HomePage,
};
