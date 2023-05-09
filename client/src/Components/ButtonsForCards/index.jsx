import React from 'react';
import { Box, Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BrushIcon from '@mui/icons-material/Brush';
import styles from './index.module.css';

const ButtonsForCards = ({ setIsVisibleUpdate, setIsVisibleConfirm }) => {
  return (
    <Box className={styles.buttons}>
      <Button
        sx={{ width: '150px' }}
        color={'error'}
        onClick={() => setIsVisibleConfirm(true)}
        variant={'contained'}
      >
        <DeleteForeverIcon
        />
      </Button>
      <Button
        sx={{ width: '150px' }}
        color={'success'}
        onClick={() => setIsVisibleUpdate(true)}
        variant={'contained'}
      >
        <BrushIcon />
      </Button>
    </Box>
  );
};

export {
  ButtonsForCards,
};
