import React from 'react';
import { Alert } from 'react-native';
import { Button, Spinner } from '@components';
import { useAuthActions } from '@redux';
import { AuthStacknavigationProp } from '@navigationTypes';
import { colors } from '@config';
import { scale } from 'react-native-size-matters';
import { signIn } from '@request';
import EmailPassword from './EmailPassword';
import Auth from './Auth';
import useSetUserData from './useSetUserData';

interface Props {
    navigation: AuthStacknavigationProp<'SignIn'>;
}

const Login: React.FC<Props> = ({ navigation }) => {
    const { email, password, authLoading, switchAuthLoader } = useAuthActions();
    const setUserData = useSetUserData();

    React.useEffect(() => {
        switchAuthLoader(false);
    }, []);

    const trySignIn = async () => {
        switchAuthLoader(true);
        const response = await signIn({ email, password });
        if (response) setUserData(response);
        switchAuthLoader(false);
    };

    return (
        <Auth>
            <EmailPassword title="Login" userName={false} />
            {authLoading ? (
                <Spinner />
            ) : (
                <>
                    <Button
                        onPress={trySignIn}
                        value="Login"
                        buttonStyle={{ marginTop: scale(30) }}
                    />
                    <Button
                        onPress={() => navigation.navigate('SignUp')}
                        value="Create account"
                        buttonStyle={{ backgroundColor: colors.bg.primary }}
                        textStyle={{ color: colors.text.secondary }}
                    />
                </>
            )}
        </Auth>
    );
};

export default Login;