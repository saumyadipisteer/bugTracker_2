export interface User {
    username: string | null;
    password: string | null;
}

export interface UserDetails{
    role: string | null;
    firstName: string | null;
    lastName: string | null;
    department?: string | null;
}

export interface UserState{
    user: User;
    isLoggedIn: boolean;
    errorMessage: string;
    hasError: boolean;
    isLoading: boolean;
}