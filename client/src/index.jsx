import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material';
import { App } from './App';
import { UserStore } from './stores/UserStore';
import { TodosStore } from './stores/TodosStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const Context = createContext(null);

root.render(
  <StyledEngineProvider injectFirst>
    <Context.Provider value={{
      user: new UserStore(),
      todos: new TodosStore(),
    }}
    >
      <App />
    </Context.Provider>
  </StyledEngineProvider>,
);
