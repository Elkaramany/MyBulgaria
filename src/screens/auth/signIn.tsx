import React from 'react';
import { View, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

import Background from './Background';
import { Container, Input, Header, Text, Button, Seperator } from '@components';
import { useAuthActions } from '@redux';
import { AuthStacknavigationProp } from '@navigationTypes';
import { LogoSVG, EyeSVG, EyeUnlockSVG } from '@assets';
import { WIDTH, HEIGHT, colors, globalStyles } from '@config';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { signIn } from '@request';

interface Props {
    navigation: AuthStacknavigationProp<'SignIn'>,
}

const Login: React.FC<Props> = ({ navigation }) => {
    const { email, setEmail, password, setPassowrd } = useAuthActions()
    const [securePassword, setSecurePassword] = React.useState(true)


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
        <Container parentContainerStyle={{ backgroundColor: colors.bg.secondary }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <LogoSVG width={WIDTH * 0.27} height={HEIGHT * 0.12} />

                <Text
                    value='Skip'
                    button bold
                    color={colors.text.secondary}
                />
            </View>
            <Text
                value='Login'
                h1 lightBold
                color={colors.text.secondary}
                style={{ marginTop: scale(45), marginBottom: scale(30) }}
            />

            <Input
                value={email}
                onChangeText={setEmail}
                label='Email'
                placeholder='Email address'
            />

            <Input
                value={password}
                onChangeText={setPassowrd}
                secureTextEntry={securePassword}
                onRightIconPress={() => setSecurePassword(!securePassword)}
                rightIcon={securePassword ? <EyeSVG /> : <EyeUnlockSVG />}
                label='Password'
                placeholder='Password'
            />

            <Button
                onPress={() => { }}
                value='Login'
                buttonStyle={{ marginTop: 36 }}
            />

            <Button
                onPress={() => { }}
                value='Create account'
                buttonStyle={{ backgroundColor: 'transparent' }}
                textStyle={{ color: colors.text.secondary }}
            />

            <Seperator />

        </Container>
    )
}

const styles = StyleSheet.create({
    authButtonsContainer: {
        width: '95%',
        backgroundColor: 'rgba(240, 240, 240, 0.5)', // Semi-transparent whitish color
        marginTop: scale(15),
    }, authInputStyle: {
        margin: 10,
        width: '85%',
        alignSelf: 'center'
    }, loginButton: {
        backgroundColor: colors.brand.primary,
        marginTop: scale(15),
        ...globalStyles.centeredContainer,
        borderRadius: moderateScale(15)
    }
})

export default Login
