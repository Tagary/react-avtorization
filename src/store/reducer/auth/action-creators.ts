import {
  AuthActionsEnum,
  SetAuthAction,
} from './types';
import { IUser } from './../../../models/IUser';
import { AppDispatch } from '../..';

export const AuthActionCreators = {
  setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionsEnum.SET_AUTH, payload: auth }),


  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    dispatch(AuthActionCreators.setIsAuth(false));
  },
};
