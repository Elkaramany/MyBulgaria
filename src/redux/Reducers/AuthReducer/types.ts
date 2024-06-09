import { Review } from "../PropertiesReducer";

export interface AuthState {
    email: string;
    name: string;
    password: string;
    authLoading: boolean;
    id: number
    jwt: string
    reviews: Review[]
    score: number
    visited: any[]
}

export const initialState: AuthState = {
    email: '',
    name: '',
    password: '',
    authLoading: false,
    id: -1,
    jwt: '',
    reviews: [],
    score: 0,
    visited: []
};
