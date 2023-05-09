import React from 'react';
import { TextField } from '@mui/material';

const FatherhoodField = ({ formik }) => (
  <TextField
    placeholder={'Введите ваше отчество'}
    id={'fatherhood'}
    name={'fatherhood'}
    value={formik.values.fatherhood}
    onChange={formik.handleChange}
    error={formik.touched.fatherhood && Boolean(formik.errors.fatherhood)}
    helperText={formik.touched.fatherhood && formik.errors.fatherhood}
    label={'Отчество'}
  />
);

export {
  FatherhoodField,
};
