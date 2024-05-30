import React from 'react';
import { View, Image } from 'react-native';

import { Container, Text, Input } from '@components';
import { useAuthActions } from '@redux';
import { HomeStacknavigationProp } from '@navigationTypes';

interface Props {
    navigation: HomeStacknavigationProp<'Home'>,
}

const Home: React.FC<Props> = ({ navigation }) => {
    const { email, password, name, setAuthState, onResetAuthState } = useAuthActions()

    return (
        <Container>
            <Text str='Home world' />

            <Input
                label='Email'
                value={email}
                onChangeText={(newEmail) => setAuthState({ prop: 'email', value: newEmail })}
            />

        </Container>
    )
}

export default Home
