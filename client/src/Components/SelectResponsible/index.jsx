import React, { useContext } from 'react';
import {
  FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';

const SelectResponsible = observer(({ responsibleHandler }) => {
  const { user } = useContext(Context);

  return (
    <FormControl fullWidth>
      <InputLabel id={'Ответственный'}>Ответственный</InputLabel>
      <Select
        value={user.subordinate}
        onChange={responsibleHandler}
        autoWidth
        label={'Ответственный:'}
        labelId={'Ответственный'}
      >
        <MenuItem defaultValue value={''}><em>Ничего не выбрано</em></MenuItem>
        { user.responsible?.map((responsible) => {
          return  <MenuItem value={responsible}>
            {responsible.name}
            {' '}
            {responsible.surname}
          </MenuItem>
        }) }
      </Select>
    </FormControl>
  );
});

export {
  SelectResponsible,
};
