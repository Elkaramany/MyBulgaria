import { StacknavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define your stack navigator param list
export type HomeStackParamList = {
    Home: undefined
};

// Define types for navigation props
export type HomeStacknavigationProp<T extends keyof HomeStackParamList> = StacknavigationProp<
    HomeStackParamList,
    T
>;

// Define types for route params
export type HomeStackRouteProp<T extends keyof HomeStackParamList> = RouteProp<
    HomeStackParamList,
    T
>;