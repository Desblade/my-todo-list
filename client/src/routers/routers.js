import { ERROR_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, TODO_ROUTE } from '../utils/consts';
import { TodoPage } from '../Pages/TodoPage';
import { LoginPage } from '../Pages/LoginPage';
import { ErrorPage } from '../Pages/ErrorPage';
import { RegisterPage } from '../Pages/RegisterPage';
import { HomePage } from '../Pages/HomePage';

export const authRoutes = [
  {
    path: TODO_ROUTE,
    Component: TodoPage,
  },
  {
    path: ERROR_ROUTE,
    Component: ErrorPage,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
  },
  {
    path: REGISTER_ROUTE,
    Component: RegisterPage,
  },
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
  {
    path: ERROR_ROUTE,
    Component: ErrorPage,
  },
];
