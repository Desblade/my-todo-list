import React from 'react';
import { TextField } from '@mui/material';

const Login = ({ formik }) => (
  <TextField
    fullWidth
    placeholder={'Введите ваш логин'}
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
  Login,
};
