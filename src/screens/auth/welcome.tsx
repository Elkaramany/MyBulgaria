import React from 'react';
import { View, Image, ImageBackground, StyleSheet, Animated } from 'react-native';

import Background from './Background';
import { Container, Input, Header, Text, Button } from '@components';
import { useAuthActions } from '@redux';
import { AuthStacknavigationProp } from '@navigationTypes';
import { PlusIcon, LogoSVG } from '@assets';
import { HEIGHT, WIDTH, colors, globalStyles } from '@config';
import { scale } from 'react-native-size-matters';

interface Props {
    navigation: AuthStacknavigationProp<'Login'>,
}

const Login: React.FC<Props> = ({ navigation }) => {
    const { email, setEmail, password, name, setAuthState, onResetAuthState } = useAuthActions()

    return (
        <Background>

            <View style={styles.logoContainer}>
                <LogoSVG width={WIDTH * 0.48} height={HEIGHT * 0.295} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text value='Welcome!' h1 bold />
                <View style={styles.authButtonsContainer}>

                </View>

            </View>

        </Background>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        marginTop: HEIGHT * 0.15,
        marginBottom: HEIGHT * 0.075,
    },
    authButtonsContainer: {
        width: '55%',
        alignSelf: 'center',
        backgroundColor: 'rgba(240, 240, 240, 0.5)', // Semi-transparent whitish color
        marginTop: scale(15),
    }
})

export default Login
