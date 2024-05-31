export interface AuthState {
    email: string;
    name: string;
    password: string;
    authLoading: boolean;
    id: number
}

export const initialState: AuthState = {
    email: '',
    name: '',
    password: '',
    authLoading: false,
    id: -1
};
