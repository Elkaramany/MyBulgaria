import { StyleSheet, View } from 'react-native'
import React from 'react'

import Search from './search'
import Map from './map'
import { Container, Text } from '@components'
import { HomeIcon, PrizeIcon } from '@assets'
import { colors, IOS, WIDTH } from 'config'
import { getInitialRegion } from './utils'
import { usePropertiesActions } from '@redux'
import { fetchAllProperties } from '@request'

const Home = () => {
    const [search, setSearch] = React.useState('')
    const [region, setRegion] = React.useState(getInitialRegion())
    const { properties, loading, switchPropertiesLoader } = usePropertiesActions()

    React.useEffect(() => {

        const initialFetch = async () => {
            switchPropertiesLoader(true)
            let result = await fetchAllProperties()
            switchPropertiesLoader(false)
        }

        initialFetch()
    }, [])

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

            <Map region={region} setRegion={setRegion} properties={properties} />
        </Container>
    )
}

export default Home

const styles = StyleSheet.create({})