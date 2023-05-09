import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SelectStatus = ({ radios, selectHandler }) => (
  <FormControl fullWidth>
    <InputLabel id={'status'}>Статус: </InputLabel>
    <Select
      value={ radios.status }
      onChange={selectHandler}
      autoWidth
      label={'Статус:'}
      labelId={'status'}
    >
      <MenuItem value={''}><em>None</em></MenuItem>
      <MenuItem value={'К выполнению'}>К выполнению</MenuItem>
      <MenuItem value={'Выполняется'}>Выполняется</MenuItem>
      <MenuItem value={'Выполнена'}>Выполнена</MenuItem>
      <MenuItem value={'Отменена'}>Отменена</MenuItem>
    </Select>
  </FormControl>
);

export {
  SelectStatus,
};
