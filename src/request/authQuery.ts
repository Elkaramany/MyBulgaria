import { Alert } from 'react-native';
import { API } from './index'

interface signUpData {
    email: string;
    password: string;
    name: string;
}

interface signInData {
    email: string
    password: string
}

interface userData {
    success: boolean
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
    inventory: any[] | null; // Adjust based on the actual type if known
    lastName: string | null;
    provider: string;
    reviews: any[]; // Adjust based on the actual type if known
    role: Role;
    score: number | null;
    updated_at: string;
    username: string;
    visited: any[]; // Adjust based on the actual type if known
}

interface JWTObject {
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
        return response.data
    }
    catch (error: any) {
        Alert.alert(error.data.message[0].messages[0].message)
        throw error;
    }
}

async function signIn(signInData: signInData): Promise<JWTObject | undefined> {
    const response = await API('post', '/auth/local', {
        identifier: signInData.email,
        password: signInData.password,
    });
    if (response && response.jwt) return response;
    else Alert.alert(response.data.data[0].messages[0].message)
}


export { signUp, signIn }