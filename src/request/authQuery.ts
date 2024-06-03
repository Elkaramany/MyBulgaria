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

async function signIn(signInData: signInData): Promise<userData> {
    try {
        const response = await API('post', '/auth/local', {
            identifier: signInData.email,
            password: signInData.password,
        });
        return response.data.user;
    } catch (error: any) {
        Alert.alert(error.data.message[0].messages[0].message)
        throw error;
    }
}


export { signUp, signIn }