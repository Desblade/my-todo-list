import React from 'react';
import { TextField } from '@mui/material';

const PasswordConfirm = ({ formik }) => (
  <TextField
    fullWidth
    type={'password'}
    placeholder={'Подтвердите ваш пароль'}
    id={'passwordConfirm'}
    name={'passwordConfirm'}
    value={formik.values.passwordConfirm}
    onChange={formik.handleChange}
    error={formik.touched.passwordConfirm && Boolean(formik.errors.passwordConfirm)}
    helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
    label={'Пароль повторно'}
  />

);

export {
  PasswordConfirm,
};
