import { IUser } from '../../../models/IUser';

export interface AuthState {
  isAuth: boolean;
  user: IUser;
}

export enum AuthActionsEnum {
  SET_AUTH = 'SET_AUTH',
  SET_USER = 'SET_USER',

}

export interface SetAuthAction {
  type: AuthActionsEnum.SET_AUTH;
  payload: boolean;
}




export type AuthAction = SetAuthAction
