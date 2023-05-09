import React from 'react';
import { TextField } from '@mui/material';

const SurnameField = ({ formik }) => (
  <TextField
    placeholder={'Введите вашу фамилию'}
    id={'surname'}
    name={'surname'}
    value={formik.values.surname}
    onChange={formik.handleChange}
    error={formik.touched.surname && Boolean(formik.errors.surname)}
    helperText={formik.touched.surname && formik.errors.surname}
    label={'Фамилия'}
  />
);

export {
  SurnameField,
};
