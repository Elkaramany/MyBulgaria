import React from 'react';

import { Button } from '@components';
import { useAuthActions } from '@redux';
import { AuthStacknavigationProp } from '@navigationTypes';
import { colors } from '@config';
import { scale } from 'react-native-size-matters';
import { signIn } from '@request';
import EmailPassword from './EmailPassword';
import Auth from './Auth';

interface Props {
    navigation: AuthStacknavigationProp<'SignIn'>,
}

const Login: React.FC<Props> = ({ navigation }) => {
    const { email, password } = useAuthActions()
    const trySignIn = async () => {
        console.log(email, password)
        try {
            const userData = await signIn({ email, password });
            console.log('User signed in:', userData);
            // Now you have access to userData containing UID, email, and name
        } catch (error) {
            console.error('Error signing in:', error);
            // Handle sign-in error
        }
    }

    return (
        <Auth>
            <EmailPassword title='Login' />
            <Button
                onPress={() => { }}
                value='Login'
                buttonStyle={{ marginTop: scale(30) }}
            />

            <Button
                onPress={() => navigation.navigate('SignUp')}
                value='Create account'
                buttonStyle={{ backgroundColor: 'transparent' }}
                textStyle={{ color: colors.text.secondary }}
            />
        </Auth>
    )
}

export default Login
