export interface AuthState {
    email: string;
    name: string;
    password: string;
    authLoading: boolean;
}

export const initialState: AuthState = {
    email: '',
    name: '',
    password: '',
    authLoading: false
};
