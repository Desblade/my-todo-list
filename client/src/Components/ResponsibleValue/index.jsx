import React from 'react';
import {
  Box, FormControlLabel, FormGroup, Switch,
} from '@mui/material';
import { SelectResponsible } from '../SelectResponsible';
import styles from './index.module.css';

const ResponsibleValue = ({
  switchHandler,
  showResponsible,
  responsibleHandler,
}) => (
  <FormGroup className={styles.formGroup}>
    <FormControlLabel control={<Switch checked={showResponsible} onChange={switchHandler}/>} label={'Ответственный'}/>
    {showResponsible && (
      <Box>
        <SelectResponsible responsibleHandler={responsibleHandler}/>
      </Box>
    )}
  </FormGroup>
);

export {
  ResponsibleValue,
};
