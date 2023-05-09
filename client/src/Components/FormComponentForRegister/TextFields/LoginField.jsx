import React from 'react';
import { TextField } from '@mui/material';

const LoginField = ({ formik }) => (
  <TextField
    fullWidth
    placeholder={'Введите Ваш логин'}
    id={'login'}
    name={'login'}
    value={formik.values.login}
    onChange={formik.handleChange}
    error={formik.touched.login && Boolean(formik.errors.login)}
    helperText={formik.touched.login && formik.errors.login}
    label={'Логин'}
  />
);

export {
  LoginField,
};
