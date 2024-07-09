export interface User {
  name: string;
  age: number;
}

export interface UserState {
  user: User;
}

export const SET_USER = 'SET_USER';

export interface SetUserAction {
  type: typeof SET_USER;
  payload: User;
  [key: string]:  unknown;
}

export type UserActionTypes = SetUserAction;
