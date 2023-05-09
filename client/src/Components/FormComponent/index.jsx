import React from 'react';
import { Box, Button } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import KeyIcon from '@mui/icons-material/Key';
import { useFormik } from 'formik';
import { ButtonsForRegister } from '../ButtonsForRegister';
import { validationSchemaForLogin } from '../../utils/validationSchema/validationSchemaForLogin';
import { Login } from './TextFields/Login';
import { Password } from './TextFields/Password';
import styles from './index.module.css';

const FormComponent = ({ clickHandler }) => {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: validationSchemaForLogin,
    onSubmit: async ({ login, password }) => {
      await clickHandler({
        login,
        password
      });
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.container}>
      <Box className={styles.form__input}>
        <AccountCircle className={styles.icon} />
        <Login formik={formik} />
      </Box>
      <Box className={styles.form__input}>
        <KeyIcon className={styles.icon} />
        <Password formik={formik} />
      </Box>
      <Button
        type="submit"
        sx={{ width: '150px' }}
        size="large"
        variant="contained"
        color="success"
      >
        Авторизация
      </Button>
      <ButtonsForRegister />
    </form>
  );
}

export {
  FormComponent,
};
