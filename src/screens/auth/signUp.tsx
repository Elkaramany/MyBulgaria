import React from 'react';
import { Alert } from 'react-native';

import { Button, Spinner } from '@components';
import { useAuthActions } from '@redux';
import { AuthStacknavigationProp } from '@navigationTypes';
import { colors } from '@config';
import { scale } from 'react-native-size-matters';
import { signUp } from '@request';
import EmailPassword from './EmailPassword';
import Auth from './Auth';

interface Props {
    navigation: AuthStacknavigationProp<'SignUp'>,
}

const Login: React.FC<Props> = ({ navigation }) => {
    const { email, password, name, authLoading, switchAuthLoader } = useAuthActions()

    const trySignUp = async () => {
        switchAuthLoader(true)
        try {
            await signUp({ email, password, name });
            navigation.navigate('SignIn')
        } catch (error) {
            Alert.alert("Network error, please try again later")
        } finally {
            switchAuthLoader(false)
        }
    }

    return (
        <Auth>
            <EmailPassword title='New Account' narrowMargins userName />
            {authLoading ?
                <Spinner />
                :
                <>
                    <Button
                        onPress={trySignUp}
                        value='Create Account'
                        buttonStyle={{ marginTop: scale(10) }}
                    />

                    <Button
                        onPress={() => navigation.navigate('SignIn')}
                        value='I already have an account'
                        buttonStyle={{ backgroundColor: colors.bg.primary, marginBottom: 10 }}
                        textStyle={{ color: colors.text.secondary }}
                    />
                </>
            }
        </Auth>
    )
}

export default Login
