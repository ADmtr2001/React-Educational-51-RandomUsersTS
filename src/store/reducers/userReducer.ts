import {UserAction, UserActionTypes, UserState} from "../../types/user";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  showUsers: false,
}

export const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return {...state, loading: true, error: null};
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {...state, loading: false, error: null, users: action.payload};
    case UserActionTypes.FETCH_USERS_ERROR:
      return {...state, loading: false, error: action.payload, users: []};
    case UserActionTypes.REMOVE_USER:
      return {...state, users: state.users.filter(user => user.id !== action.payload)};
    case UserActionTypes.REMOVE_ALL_USERS:
      return {...state, users: []};
    case UserActionTypes.TOGGLE_SHOW_USERS:
      return {...state, showUsers: action.payload}
    default:
      return {...state, loading: true};
  }
}