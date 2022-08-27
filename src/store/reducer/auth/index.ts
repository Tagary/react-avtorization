import { AuthAction, AuthActionsEnum, AuthState } from './types';
import { IUser } from './../../../models/IUser';
const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser,
};

export default function authReducer(state = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionsEnum.SET_AUTH:
      return { ...state, isAuth: action.payload };


    default:
      return state;
  }
}
