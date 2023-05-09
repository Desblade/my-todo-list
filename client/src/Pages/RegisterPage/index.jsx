import React, { useContext, useEffect } from 'react';
import { Card, Container } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { FormComponentForRegister } from '../../Components/FormComponentForRegister';
import { Context } from '../../index';
import 'react-toastify/dist/ReactToastify.css';
import styles from './index.module.css';

const RegisterPage = observer(() => {
  const navigate = useNavigate();
  const { user } = useContext(Context);

  useEffect(() => {
    user.handlerSetManagers();
  }, []);

  const handlerRegister = async (userObj) => {
    try {
      await user.registerHandler(userObj, navigate);
    } catch (e) {
      return toast(e.error);
    }
  };

  return (
    <Container className={styles.container}>
      <Card className={styles.card} variant={'outlined'}>
        <FormComponentForRegister user={user} handlerRegister={handlerRegister} />
      </Card>
      <ToastContainer />
    </Container>
  );
});

export {
  RegisterPage,
};
