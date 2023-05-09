import React from 'react';
import { TextField } from '@mui/material';

const Password = ({ formik }) => (
  <TextField
    fullWidth
    type={'password'}
    id={'password'}
    name={'password'}
    label={'Пароль'}
    value={formik.values.password}
    onChange={formik.handleChange}
    error={formik.touched.password && Boolean(formik.errors.password)}
    helperText={formik.touched.password && formik.errors.password}
    placeholder={'Введите ваш пароль'}
  />
);

export {
  Password,
};
