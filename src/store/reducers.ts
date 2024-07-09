import { UserState, UserActionTypes, SET_USER } from './types';

const initialState: UserState = {
  user: { name: '', age: 0 },
};

export const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
