import { StyleSheet, View } from 'react-native'
import React from 'react'

import Search from './search'
import Map from './map'
import { Container, Text } from '@components'
import { HomeIcon, PrizeIcon } from '@assets'
import { colors, IOS, WIDTH } from 'config'
import { getInitialRegion } from './utils'

const Home = () => {
    const [search, setSearch] = React.useState('')
    const [region, setRegion] = React.useState(getInitialRegion())

    return (
        <Container childContainerStyle={{ marginHorizontal: 0 }}>
            <View style={{ width: WIDTH * 0.8, alignSelf: 'center', paddingBottom: IOS ? 27 : 23 }}>
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
            </View>

            <Map region={region} setRegion={setRegion} />
        </Container>
    )
}

export default Home

const styles = StyleSheet.create({})