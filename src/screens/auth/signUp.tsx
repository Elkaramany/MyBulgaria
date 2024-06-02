import React from 'react';
import { Alert } from 'react-native';

import { Button } from '@components';
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
    const { email, password, name, setName, setId } = useAuthActions()

    const trySignUp = async () => {
        try {
            const response = await signUp({ email, password, name });
            if (response.statusCode && response.error) {
                Alert.alert(response.message[0].messages[0].message)
            } else if (response.user) {
                // Handle success response
                setId(response.user.id)
            } else {
                // Handle unexpected response format
                Alert.alert("Error Signing up, please try again later")
            }
        } catch (error) {
            Alert.alert("Network error, please try again later")
        }
    }

    return (
        <Auth>
            <EmailPassword title='New Account' narrowMargins userName />
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
        </Auth>
    )
}

export default Login
