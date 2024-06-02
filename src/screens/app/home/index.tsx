import { StyleSheet, View } from 'react-native'
import React from 'react'

import Search from './search'
import { Container, Text } from '@components'
import { HomeIcon, PrizeIcon } from '@assets'
import { colors, IOS } from 'config'

const Home = () => {
    const [search, setSearch] = React.useState('')

    return (
        <Container >
            <Text
                value='MYBULGARIA'
                body bold
                color={colors.text.secondary}
                style={{ marginBottom: IOS ? 20 : 15 }}
            />

            <Search
                search={search}
                onSearch={setSearch}
            />
        </Container>
    )
}

export default Home

const styles = StyleSheet.create({})