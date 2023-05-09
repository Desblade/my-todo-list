import React, { useContext } from 'react';
import { Container, Card } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../index';
import { FormComponent } from '../../Components/FormComponent';
import styles from './index.module.css';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const clickHandler = async (userData) => {
    try {
      await user.signInHandler(userData, navigate);
    } catch (e) {
      return toast(e.error);
    }
  };

  return (
    <Container className={styles.container}>
      <Card className={styles.card} variant={'outlined'}>
        <FormComponent
          clickHandler={clickHandler}
        />
      </Card>
      <ToastContainer />
    </Container>
  );
});

export {
  LoginPage,
};
