import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Container } from '@components'
import { LeftArrowIcon } from '@assets'
import { colors, } from '@config'
import { MainStackNavigationProp } from '@navigationTypes'

import { items } from './utils'
import TopThree from './topThree'
import List from './list'

interface Props {
    navigation: MainStackNavigationProp<'Leaderboard'>
}

const Leaderboard: React.FC<Props> = ({ navigation }) => {

    return (
        <Container>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <LeftArrowIcon fill={colors.brand.primary} />
            </TouchableOpacity>

            <TopThree navigation={navigation} items={items} />
            <List items={items} />
        </Container>
    );
};

export default Leaderboard;