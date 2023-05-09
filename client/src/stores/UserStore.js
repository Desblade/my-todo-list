import { makeAutoObservable } from 'mobx';
import {
  checkTokenAPI,
  getManagersAPI,
  getResponsibleAPI,
  loginAPI,
  logOutAPI,
  registerAPI
} from '../utils/http/userAPI';
import { TODO_ROUTE } from '../utils/consts';

class UserStore {
  constructor() {
    this._user = {};
    this._isAuth = false;
    this._responsible = [];
    this._subordinate = {};
    this._managers = [];

    makeAutoObservable(this);
  }

  setResponsible(responsible) {
    this._responsible = responsible;
  }

  setManagers(managers) {
    this._managers = managers;
  }

  setUser(user) {
    this._user = user;
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }

  async setResponsibles() {
    const data = await getResponsibleAPI();
    this.setResponsible(data);
  }

  async handlerSetManagers() {
    const data = await getManagersAPI();
    this.setManagers(data);
  }

  setSubordinate(subordinate) {
    this._subordinate = subordinate;
  }

  async registerHandler(userData, navigate) {
    try {
      const data = await registerAPI(userData);

      this.setUser(data);
      this.setIsAuth(true);

      navigate(TODO_ROUTE);
    } catch (e) {
      throw { error: e.response.data.message }
    }
  }

  async checkToken() {
    const data = await checkTokenAPI();
    this.setUser(data);
    this.setIsAuth(true);
  }

  async signInHandler(userData, navigate) {
    try {
      const data = await loginAPI(userData);

      this.setUser(data);
      this.setIsAuth(true);
      navigate(TODO_ROUTE);
    } catch (err) {
      throw { error: err.response.data.message };
    }
  }

  logOutHandler() {
    logOutAPI();

    this.setUser({});
    this.setIsAuth(false);
  }

  get user() {
    return this._user;
  }

  get isAuth() {
    return this._isAuth;
  }

  get responsible() {
    return this._responsible;
  }

  get subordinate() {
    return this._subordinate;
  }

  get managers() {
    return this._managers;
  }
}

export {
  UserStore,
};
