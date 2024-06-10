import { Alert } from 'react-native';
import { API } from './index';

interface signUpData {
    email: string;
    password: string;
    name: string;
}

interface signInData {
    email: string;
    password: string;
}

interface userData {
    success: boolean;
    id: number;
    email: string;
    name: string;
}

interface Role {
    description: string;
    id: number;
    name: string;
    type: string;
}

interface User {
    blocked: boolean | null;
    confirmed: boolean;
    created_at: string;
    email: string;
    firstName: string | null;
    id: number;
    inventory: any[] | null;
    lastName: string | null;
    provider: string;
    reviews: any[];
    role: Role;
    score: number | null;
    updated_at: string;
    username: string;
    visited: any[];
}

export interface JWTObject {
    jwt: string;
    user: User;
}

async function signUp(userData: signUpData): Promise<userData> {
    try {
        const response = await API('post', '/auth/local/register', {
            email: userData.email,
            username: userData.name,
            password: userData.password,
        });
        return {
            success: true,
            id: response.data.user.id,
            email: response.data.user.email,
            name: response.data.user.username,
        };
    } catch (error: any) {
        Alert.alert(error.response.data.message[0].messages[0].message);
        throw error;
    }
}

async function signIn(signInData: signInData): Promise<JWTObject | undefined> {
    try {
        const response = await API('post', '/auth/local', {
            identifier: signInData.email,
            password: signInData.password,
        });
        return {
            jwt: response.data.jwt,
            user: response.data.user,
        };
    } catch (error: any) {
        Alert.alert(error.response.data.message[0].messages[0].message);
        throw error;
    }
}

export { signUp, signIn };