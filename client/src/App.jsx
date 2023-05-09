import React, { useContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import { Header } from './Components/Header';
import { AppRouter } from './Components/AppRouter';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';

const App = observer(() => {
  const { user } = useContext(Context);

  useEffect(() => {
    user.checkToken();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
});

export {
    App,
};
