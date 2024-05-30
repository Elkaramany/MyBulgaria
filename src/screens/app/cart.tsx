import React from 'react';
import { View, Image } from 'react-native';

import { Container, Input, Text } from '@components';
import { useAuthActions } from '@redux';
import { HomeStacknavigationProp } from '@navigationTypes';

interface Props {
    navigation: HomeStacknavigationProp<'Home'>,
}

const Cart: React.FC<Props> = ({ navigation }) => {
    const { email, password, name, setAuthState, onResetAuthState } = useAuthActions()

    return (
        <Container>
            <Text str='Cart world' />

            <Input
                label='Email'
                value={email}
                onChangeText={(newEmail) => setAuthState({ prop: 'email', value: newEmail })}
            />

        </Container>
    )
}

export default Cart
