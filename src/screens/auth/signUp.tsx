import React from 'react';
import { Alert } from 'react-native';

import { Button, Input } from '@components';
import { useAuthActions } from '@redux';
import { AuthStacknavigationProp } from '@navigationTypes';
import { colors } from '@config';
import { scale } from 'react-native-size-matters';
import { signUp } from '@request';
import EmailPassword from './EmailPassword';
import Auth from './Auth';
import axios from 'axios';

interface Props {
    navigation: AuthStacknavigationProp<'SignIn'>,
}

const Login: React.FC<Props> = ({ navigation }) => {
    const { email, password, name, setName } = useAuthActions()

    const trySignUp = async () => {
        console.log(email)
        try {
            const response = await signUp({ email, password, name })
            console.log(response, ' success bra el call')
        } catch (error) {
            console.log(error, ' error bra el call')
        }
    }

    return (
        <Auth>
            <EmailPassword title='New Account' narrowMargins />
            <Input
                value={name}
                onChangeText={setName}
                label='Username'
                placeholder='Your name'
                labelStyle={{ color: colors.text.primary }}
            />
            <Button
                onPress={trySignUp}
                value='Create Account'
                buttonStyle={{ marginTop: scale(10) }}
            />

            <Button
                onPress={() => navigation.navigate('SignIn')}
                value='I already have an account'
                buttonStyle={{ backgroundColor: colors.bg.primary }}
                textStyle={{ color: colors.text.secondary }}
            />
        </Auth>
    )
}

export default Login
