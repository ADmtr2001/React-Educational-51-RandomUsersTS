export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  address: {
    country: string;
    city: string;
    street_name: string;
  };
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
  REMOVE_USER = 'REMOVE_USER',
  REMOVE_ALL_USERS = 'REMOVE_ALL_USERS',
}

export type UserAction = FetchUsers | FetchUsersSuccess | FetchUsersError | RemoveUser | RemoveAllUsers;

interface FetchUsers {
  type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccess {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: User[];
}

interface FetchUsersError {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

interface RemoveUser {
  type: UserActionTypes.REMOVE_USER;
  payload: number;
}

interface RemoveAllUsers {
  type: UserActionTypes.REMOVE_ALL_USERS;
}