import React, { useContext } from 'react';
import { AppBar, Button, Toolbar, } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../index';
import { LOGIN_ROUTE } from '../../utils/consts';
import { AuthContent } from '../AuthContent';
import styles from './index.module.css';

const Header = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const exitHandler = () => {
    user.logOutHandler();

    navigate(LOGIN_ROUTE);
  };

  return (
    <AppBar className={styles.appBar}>
      <Toolbar className={styles.toolBar}>
        {user.isAuth
          ? <AuthContent exitHandler={exitHandler} />
          : (
            <Button
              onClick={() => navigate(LOGIN_ROUTE)}
              size={'large'}
              color={'success'}
              variant={'contained'}
            >
              Войти
            </Button>
          )}
      </Toolbar>
    </AppBar>
  );
});

export {
  Header,
};
