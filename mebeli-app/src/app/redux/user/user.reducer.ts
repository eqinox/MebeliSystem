import { IUserState } from './user.state';

import { User } from '../../models/user';

import { ADD_USER, LOGIN_USER, LOGOUT_USER } from './user.actions';

const initialUserState = {
  currentUser: new User()
};

function addUser(state: IUserState, action) {
  return Object.assign({}, state, { currentUser: action.user });
}

function loginUser(state: IUserState, action) {
  return Object.assign({}, state, { currentUser: action.user });
}

function logoutUser(state: IUserState) {
  return Object.assign({}, state, { currentUser: {} });
}

export function userReducer(state: IUserState = initialUserState, action) {
  switch (action.type) {
    case ADD_USER: {
      return addUser(state, action);
    }
    case LOGIN_USER: {
      return loginUser(state, action);
    }
    case LOGOUT_USER: {
      return logoutUser(state);
    }
    default: {
      return state;
    }
  }
}
