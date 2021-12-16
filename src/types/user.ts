export interface User {
  id: number;
  firstName: string;
  secondName: string;
  email: string;
  img: string;
  adress: {
    country: string;
    city: string;
    street: string;
  };
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: string || null;
}

export interface UserAction;

interface FetchUsers {

}