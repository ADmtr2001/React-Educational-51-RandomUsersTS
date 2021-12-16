import {User, UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";


export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionTypes.FETCH_USERS});
      const response = await axios.get<User[]>('https://random-data-api.com/api/users/random_user?size=10');
      dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data});
    } catch(err) {
      dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Error...'});
    }
  }
}

export const removeUser = (id: number) => {
  return {type: UserActionTypes.REMOVE_USER, payload: id}
}

export const removeAllUsers = () => {
  return {type: UserActionTypes.REMOVE_ALL_USERS}
}