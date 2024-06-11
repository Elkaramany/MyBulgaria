import { StyleSheet, View, TouchableOpacity, Keyboard } from 'react-native'
import React from 'react'

import Search from './search'
import Map from './map'
import { Container, Spinner, Text } from '@components'
import { colors, IOS, WIDTH } from 'config'
import { getClosestProperties, getInitialRegion } from './utils'
import { PropertyType, usePropertiesActions } from '@redux'
import { usePropertiesQuery } from '@request'
import useDebounce from './useDebounce'
import { MainStackNavigationProp } from '@navigationTypes'
import Filters from './filters'

interface Props {
    navigation: MainStackNavigationProp<'Tabs'>
}

const Home: React.FC<Props> = ({ navigation }) => {
    const [search, setSearch] = React.useState('')
    const [region, setRegion] = React.useState(getInitialRegion())
    const { properties, setProperties } = usePropertiesActions()
    const [filtersModal, setFiltersModal] = React.useState(false)
    const [filteredProperties, setFilteredProperties] = React.useState<PropertyType[]>([])
    const { properties: queriedProperties, categories, provinces, loading, error } = usePropertiesQuery()

    React.useEffect(() => {
        if (queriedProperties && queriedProperties.length > 0) setProperties(queriedProperties)
    }, [queriedProperties])

    // DeBounce Function
    useDebounce(() => {
        setFilteredProperties(getClosestProperties(properties, search))
    }, [properties, search], 800
    );

    const onSuggestionPress = (property: PropertyType) => {
        setRegion({ ...region, latitude: property.location.x, longitude: property.location.y })
        setSearch(property.name)
        setFilteredProperties([])
        Keyboard.dismiss()
    }

    return (
        <Container childContainerStyle={{ marginHorizontal: 0 }}>
            <View style={{ width: WIDTH * 0.8, alignSelf: 'center', paddingBottom: IOS ? 27 : 15 }}>
                <Text
                    value='MYBULGARIA'
                    body bold
                    color={colors.text.secondary}
                    style={{ marginBottom: IOS ? 20 : 15 }}
                />
                {!loading &&
                    <Search
                        search={search}
                        onSearch={setSearch}
                        filteredProperties={filteredProperties}
                        onSuggestionPress={onSuggestionPress}
                        onFilterPress={() => setFiltersModal(true)}
                    />
                }
            </View>
            {
                loading ?
                    <Spinner />
                    :
                    <Map region={region}
                        setRegion={setRegion}
                        properties={properties}
                        navigation={navigation}
                    />
            }
            {
                filtersModal &&
                <Filters
                    categories={categories}
                    provinces={provinces}
                    visible={filtersModal}
                    setVisible={setFiltersModal}
                />
            }
        </Container>
    )
}

export default Home