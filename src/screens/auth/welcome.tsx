import React from 'react';
import { View, Image, ImageBackground, StyleSheet, Animated, TouchableOpacity } from 'react-native';

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
            <View style={{ alignItems: 'center' }}>
                <Text value='Welcome!' h1 bold />
                <Text
                    value={`Lorem ipsum dolor sit amet,${`\n`} consectetur adipiscing elit. Sed eget${`\n`} placerat mauris.`}
                    body
                    style={{ textAlign: 'center' }}
                />

                <TouchableOpacity style={[styles.authButtonsContainer, styles.getStartedButton]}>
                    <Text
                        value={`Get Started`}
                        title
                        color={colors.text.secondary}
                        bold
                        style={{ paddingVertical: 16, paddingHorizontal: 24  }}
                    />

                </TouchableOpacity>

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
        width: WIDTH * 0.8,
        marginTop: scale(15),
        ...globalStyles.centeredContainer,
        borderRadius: 15
    },
    getStartedButton: {
        backgroundColor: colors.bg.primary
    }
})

export default Login
