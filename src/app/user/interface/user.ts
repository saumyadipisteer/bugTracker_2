export interface User {
  username: string | null;
  password: string | null;
}

export interface UserDetails {
  role: string | null;
  firstName: string | null;
  lastName: string | null;
  department?: string | null;
}

export interface UserState {
  user: string;
  loggedIn: boolean;
  errorMessage: string;
  hasError: boolean;
}

export interface ResponseUserData {
  status: string;
  statusCode: number;
  message: string;
  body: UserState;
}
