import React from 'react';
import {
 FormControl, FormControlLabel, FormLabel, Radio, RadioGroup,
} from '@mui/material';
import styles from './index.module.css';

const RadioComponent = ({ radioGroupHandler }) => (
  <FormControl fullWidth>
    <FormLabel>Приоритет:</FormLabel>
    <RadioGroup
      className={styles.radioGroup}
      onChange={(_, value) => radioGroupHandler(value)}
      row
    >
      <FormControlLabel
        control={(
          <Radio
            value={'Высокий'}
          />
        )}
        label={'Высокий'}
      />
      <FormControlLabel
        control={(
          <Radio
            value={'Средний'}
          />
        )}
        label={'Средний'}
      />
      <FormControlLabel
        control={
          <Radio value={'Низкий'} />
      }
        label={'Низкий'}
      />
    </RadioGroup>
  </FormControl>
);

export {
  RadioComponent,
};
