import React from 'react';
import {
  FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';

const ManagerSelect = ({ formik, managers }) => (
  <FormControl fullWidth>
    <InputLabel id={'manager'}>Менеджер</InputLabel>
    <Select
      value={formik.values.manager}
      onChange={formik.handleChange}
      id={'manager'}
      name={'manager'}
      label={'manager'}
      labelId={'manager'}
      error={formik.touched.manager && Boolean(formik.errors.manager)}
      helperText={formik.touched.manager && formik.errors.manager}
    >
      { managers.length > 0
        ? managers.map((manager) => (
          <MenuItem value={manager}>
            {manager.name}
            {' '}
            {manager.surname}
          </MenuItem>
        ))
        : <MenuItem disabled><em>Свободные менеджеры не найдены</em></MenuItem>}
    </Select>
  </FormControl>
);

export {
  ManagerSelect,
};
