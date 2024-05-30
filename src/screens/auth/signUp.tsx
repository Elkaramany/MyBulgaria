import React from 'react';
import { View, StyleSheet } from 'react-native';

import Background from './Background';
import { Input, Text, Button } from '@components';
import { useAuthActions } from '@redux';
import { AuthStacknavigationProp } from '@navigationTypes';
import { PlusIcon, } from '@assets';
import { colors, globalStyles } from '@config';
import { scale } from 'react-native-size-matters';
import { firebaseSignUp } from '@request';

interface Props {
    navigation: AuthStacknavigationProp<'Login'>,
}

const SignUp: React.FC<Props> = ({ navigation }) => {
    const { email, setEmail, password, setPassowrd, name, setName } = useAuthActions()


    const trySignIn = async () => {
        console.log(email, password)
        try {
            const userData = await firebaseSignUp({ email, password, name });
            console.log('User signed in:', userData);
            // Now you have access to userData containing UID, email, and name
        } catch (error) {
            console.error('Error signing in:', error);
            // Handle sign-in error
        }
    }

    return (
        <Background>

            <View style={[globalStyles.centeredContainer, { flex: 1 }]}>
                <Text value='Meals To Go' big style={{ alignSelf: 'center' }} />
                <View style={styles.authButtonsContainer}>
                    <Input
                        value={email}
                        onChangeText={(val: string) => setEmail(val)}
                        label='E-Mail'
                        buttonStyle={styles.authInputStyle}
                        placeholder='john@email.com'
                    />

                    <Input
                        value={password}
                        onChangeText={(val: string) => setPassowrd(val)}
                        label='Password'
                        buttonStyle={styles.authInputStyle}
                        placeholder='john@email.com'
                        secureTextEntry
                    />

                    <Input
                        value={name}
                        onChangeText={(val: string) => setName(val)}
                        label='Name'
                        buttonStyle={styles.authInputStyle}
                        placeholder='John'
                    />

                    <Button
                        value='Sign Up'
                        onPress={() => trySignIn()}
                        icon={<PlusIcon fill={colors.text.inverse} />}
                        buttonStyle={{ margin: scale(10), width: '85%', alignSelf: 'center' }}
                    />


                </View>

            </View>

        </Background>
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
    }
})

export default SignUp
