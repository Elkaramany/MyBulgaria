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

interface Props {
    navigation: AuthStacknavigationProp<'SignIn'>;
}

const Login: React.FC<Props> = ({ navigation }) => {
    const { email, password, setId, setName, authLoading, switchAuthLoader } = useAuthActions();

    const trySignIn = async () => {
        switchAuthLoader(true)
        try {
            const response = await signIn({ email, password });
            if (response.statusCode && response.error) {
                Alert.alert(response.message[0].messages[0].message);
            } else if (response.user) {
                setName(response.user.username)
                setId(response.user.id);
            } else {
                Alert.alert("Error Signing in, please try again later");
            }
        } catch (error) {
            Alert.alert("Network error, please try again later");
        } finally {
            switchAuthLoader(false)
        }
    };

    return (
        <Auth>
            <EmailPassword title='Login' userName={false} />
            {authLoading ?
                <Spinner />
                :
                <>
                    <Button
                        onPress={trySignIn}
                        value='Login'
                        buttonStyle={{ marginTop: scale(30) }}
                    />
                    <Button
                        onPress={() => navigation.navigate('SignUp')}
                        value='Create account'
                        buttonStyle={{ backgroundColor: colors.bg.primary }}
                        textStyle={{ color: colors.text.secondary }}
                    />
                </>
            }
        </Auth>
    );
};

export default Login;
