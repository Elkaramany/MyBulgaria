import { useDispatch, useSelector } from 'react-redux';
import { AuthState, onChangeAuthState, resetAuthState } from './index'; // Adjust the path to your action creators

export const useAuthActions = () => {
    const dispatch = useDispatch();
    const { email, password, name, authLoading } = useSelector((state: { auth: AuthState }) => state.auth);

    const setAuthState = ({ prop, value }: { prop: keyof AuthState; value: string | boolean }) => {
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
        switchAuthLoader,
        authLoading
    };
};