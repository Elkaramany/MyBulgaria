import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import Background from './Background';
import { Button, Text } from '@components';
import { AuthStacknavigationProp } from '@navigationTypes';
import { LogoSVG } from '@assets';
import { HEIGHT, WIDTH, colors, globalStyles } from '@config';
import { moderateScale, scale } from 'react-native-size-matters';

interface Props {
    navigation: AuthStacknavigationProp<'Welcome'>,
}

const Login: React.FC<Props> = ({ navigation }) => {

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

                <Button
                    onPress={() => { }}
                    value='Get Started'
                    buttonStyle={{ backgroundColor: colors.bg.primary }}
                    textStyle={{ color: colors.text.secondary }}
                />

                <Button
                    onPress={() => navigation.navigate('SignIn')}
                    value='I already have an account'
                    buttonStyle={styles.accountButton}
                    textStyle={{ color: colors.text.primary }}
                />
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
        borderRadius: moderateScale(15)
    },
    accountButton: {
        backgroundColor: 'transparent',
        borderWidth: scale(2),
        borderColor: colors.bg.primary,
    }
})

export default Login
