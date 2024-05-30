import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define your stack navigator param list
export type AuthStackParamList = {
    Login: undefined
    SignIn: undefined
    SignUp: undefined
};

// Define types for navigation props
export type AuthStacknavigationProp<T extends keyof AuthStackParamList> = StackNavigationProp<
    AuthStackParamList,
    T
>;

// Define types for route params
export type AuthStackRouteProp<T extends keyof AuthStackParamList> = RouteProp<
    AuthStackParamList,
    T
>;