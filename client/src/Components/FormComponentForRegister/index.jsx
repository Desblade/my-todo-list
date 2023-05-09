import React from 'react';
import { Box, Button } from '@mui/material';
import { ButtonsForRegister } from '../ButtonsForRegister';
import { useFormik } from 'formik';
import { validationSchemaForRegister } from '../../utils/validationSchema/validationSchemaForRegister';
import { NameField } from './TextFields/NameField';
import { SurnameField } from './TextFields/SurnameField';
import { FatherhoodField } from './TextFields/FatherhoodField';
import { PasswordConfirm } from './TextFields/PasswordConfirm';
import { RolesSelect } from './TextFields/RolesSelect';
import { ManagerSelect } from './TextFields/ManagerSelect';
import { PasswordField } from './TextFields/PasswordField';
import { LoginField } from './TextFields/LoginField';
import styles from './index.module.css';

const FormComponentForRegister = ({ handlerRegister, user }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      fatherhood: '',
      login: '',
      password: '',
      passwordConfirm: '',
      roles: '',
      manager: {},
    },
    validationSchema: validationSchemaForRegister,
    onSubmit: async ({ name, surname, fatherhood, login, password, roles, manager }) => {
      await handlerRegister({
        name,
        surname,
        fatherhood,
        login,
        password,
        roles,
        managerId: manager.id,
      });
      console.log(name);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.container}>
      <Box className={styles.formGroup}>
        <NameField formik={formik} />
        <SurnameField formik={formik} />
        <FatherhoodField formik={formik} />
      </Box>
      <LoginField formik={formik} />
      <Box className={styles.password}>
        <PasswordField formik={formik} />
        <PasswordConfirm formik={formik} />
      </Box>
      <RolesSelect formik={formik} />
      { formik.values.roles === 'user'
        && <ManagerSelect
          formik={formik}
          managers={user.managers}
        />
      }
      <Button
        type={'submit'}
        size={'large'}
        variant={'contained'}
        color={'success'}
      >
        Зарегестрироваться
      </Button>
      <ButtonsForRegister />
    </form>
  );
}

export {
  FormComponentForRegister,
};