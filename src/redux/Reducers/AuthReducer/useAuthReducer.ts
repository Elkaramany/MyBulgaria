import { useDispatch, useSelector } from 'react-redux';
import { AuthState, onChangeAuthState, resetAuthState } from './index'; // Adjust the path to your action creators
import { Review } from '../PropertiesReducer';

export const useAuthActions = () => {
    const dispatch = useDispatch();
    const { email, password, name, authLoading, id, jwt, reviews, score, visited } = useSelector((state: { auth: AuthState }) => state.auth);

    const setAuthState = ({ prop, value }: { prop: keyof AuthState; value: string | boolean | number | any[] }) => {
        dispatch(onChangeAuthState({ prop, value }));
    };

    const setEmail = (value: string) => {
        dispatch(onChangeAuthState({ prop: 'email', value }));
    }

    const setPassowrd = (value: string) => {
        dispatch(onChangeAuthState({ prop: 'password', value }));
    }

    const setName = (value: string) => {
        dispatch(onChangeAuthState({ prop: 'name', value }));
    }

    const setId = (value: number) => {
        dispatch(onChangeAuthState({ prop: 'id', value }));
    }

    const setJWT = (value: string) => {
        dispatch(onChangeAuthState({ prop: 'jwt', value }));
    }

    const setReviews = (value: Review[]) => {
        dispatch(onChangeAuthState({ prop: 'reviews', value }));
    }

    const setScore = (value: number) => {
        dispatch(onChangeAuthState({ prop: 'score', value }));
    }

    const setVisited = (value: any[]) => {
        dispatch(onChangeAuthState({ prop: 'visited', value }));
    }

    const switchAuthLoader = (value: boolean) => {
        dispatch(onChangeAuthState({ prop: 'authLoading', value }));
    }

    const onResetAuthState = () => {
        dispatch(resetAuthState());
    };

    return {
        onResetAuthState,
        setAuthState,
        email,
        setEmail,
        password,
        setPassowrd,
        name,
        setName,
        id,
        setId,
        switchAuthLoader,
        authLoading,
        jwt,
        setJWT,
        reviews,
        setReviews,
        score,
        setScore,
        visited,
        setVisited,
    };
};