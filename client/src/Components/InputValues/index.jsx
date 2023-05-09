import React from 'react';
import { Box, InputLabel, TextField } from '@mui/material';
import styles from './index.module.css';

const InputValues = ({ titleRef, descriptionRef, endtimeRef }) => {
  return (
    <Box className={styles.box} fullWidth>
      <TextField
        inputRef={titleRef}
        fullWidth
        label={'Оглавление задачи'}
      />
      <TextField
        inputRef={descriptionRef}
        fullWidth
        label={'Описание задачи'}
        multiline
        rows={2}
        maxRows={4}
      />
      <Box sx={{width: '100%'}}>
        <InputLabel htmlFor={'endtime'}>{'Исполнить до:'}</InputLabel>
        <TextField
          inputRef={endtimeRef}
          id={'endtime'}
          fullWidth
          type={'date'}
        />
      </Box>
    </Box>
  );
};

export {
  InputValues,
};
