import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const RolesSelect = ({ formik }) => (
  <FormControl fullWidth>
    <InputLabel id={'roles'}>Роль</InputLabel>
    <Select
      value={formik.values.roles}
      onChange={formik.handleChange}
      id={'roles'}
      name={'roles'}
      label={'roles'}
      labelId={'roles'}
      error={formik.touched.roles && Boolean(formik.errors.roles)}
      helperText={formik.touched.roles && formik.errors.roles}
    >
      <MenuItem defaultValue value={''}><em>Ничего не выбрано</em></MenuItem>
      <MenuItem value={'user'}>Пользователь</MenuItem>
      <MenuItem value={'manager'}>Менеджер</MenuItem>
    </Select>
  </FormControl>
);

export {
  RolesSelect,
};
