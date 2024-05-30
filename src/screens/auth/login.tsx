import React from 'react';
import { View, Image, ImageBackground, StyleSheet, Animated } from 'react-native';

import Background from './Background';
import { Container, Input, Header, Text, Button } from '@components';
import { useAuthActions } from '@redux';
import { AuthStacknavigationProp } from '@navigationTypes';
import { PlusIcon, WatermelonSVG, homeBg } from '@assets';
import { WIDTH, colors, globalStyles } from '@config';
import { scale } from 'react-native-size-matters';

interface Props {
    navigation: AuthStacknavigationProp<'Login'>,
}

const Login: React.FC<Props> = ({ navigation }) => {
    const { email, setEmail, password, name, setAuthState, onResetAuthState } = useAuthActions()
    const [animation] = React.useState(new Animated.Value(0));

    React.useEffect(() => {
        startAnimation();
    }, []);

    const startAnimation = () => {
        Animated.sequence([
            Animated.timing(animation, {
                toValue: 1.25,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.spring(animation, {
                toValue: 1,
                friction: 4,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const translateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-300, 0], // Adjust the range based on your screen size and image dimensions
    });


    return (
        <Background>

            <Animated.View
                style={[globalStyles.centeredContainer, { marginVertical: '25%', transform: [{ translateX }] }]}>
                <WatermelonSVG
                    width={WIDTH * 0.4}
                    height={WIDTH * 0.4}
                />
            </Animated.View>

            <View style={{ justifyContent: 'center' }}>
                <Text value='Meals To Go' big style={{ alignSelf: 'center' }} />
                <View style={styles.authButtonsContainer}>
                    <Button
                        value='Login'
                        onPress={() => navigation.navigate('SignIn')}
                        icon={<PlusIcon fill={colors.text.inverse} />}
                        buttonStyle={{ margin: scale(20), marginBottom: scale(5) }}
                    />

                    <Button
                        value='Register'
                        onPress={() => navigation.navigate('SignUp')}
                        icon={<PlusIcon fill={colors.text.inverse} />}
                        buttonStyle={{ margin: scale(20), marginTop: scale(5) }}
                    />
                </View>

            </View>

        </Background>
    )
}

const styles = StyleSheet.create({
    authButtonsContainer: {
        width: '55%',
        alignSelf: 'center',
        backgroundColor: 'rgba(240, 240, 240, 0.5)', // Semi-transparent whitish color
        marginTop: scale(15),
    }
})

export default Login
