import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { authRoutes, publicRoutes } from '../../routers/routers';
import { Context } from '../../index';

const AppRouter = observer(() => {
  const { user } = useContext(Context);

  return (
    <Routes>
      {user.isAuth
        ? authRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            Component={Component}
          />
        ))
        : publicRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            Component={Component}
          />
        ))
      }
    </Routes>
  );
});

export {
  AppRouter,
};
