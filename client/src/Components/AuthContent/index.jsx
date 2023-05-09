import React, { useContext } from 'react';
import {
  Box, Button, Container, IconButton, Typography,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import styles from './index.module.css';

const AuthContent = observer(({ exitHandler }) => {
  const { user } = useContext(Context);

  return (
    <Container className={styles.container}>
      <Box className={styles.box}>
        <IconButton edge={'start'} color="inherit">
          <AccountCircleIcon />
        </IconButton>
        <Typography fontSize={'20px'}>
          {user.user.login}
        </Typography>
      </Box>
      <Button
        onClick={exitHandler}
        size={ 'large'}
        color={'error'}
        variant={'contained'}>
        Выйти
      </Button>
    </Container>
  );
});

export {
  AuthContent,
};
