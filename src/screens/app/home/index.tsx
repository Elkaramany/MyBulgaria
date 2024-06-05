import { StyleSheet, View, TouchableOpacity, Keyboard } from 'react-native'
import React from 'react'

import Search from './search'
import Map from './map'
import { Container, Text } from '@components'
import { colors, IOS, WIDTH } from 'config'
import { getClosestProperties, getInitialRegion } from './utils'
import { PropertyType, usePropertiesActions } from '@redux'
import { fetchAllProperties } from '@request'
import useDebounce from './useDebounce'
import { MainStackNavigationProp, BottomTabParamList, BottomTabNavigationProp } from '@navigationTypes'

interface Props {
    navigation: MainStackNavigationProp<'Tabs'>
}

const Home: React.FC<Props> = ({ navigation }) => {
    const [search, setSearch] = React.useState('')
    const [region, setRegion] = React.useState(getInitialRegion())
    const { properties, loading, switchPropertiesLoader, setProperties } = usePropertiesActions()
    const [filteredProperties, setFilteredProperties] = React.useState<PropertyType[]>([])

    React.useEffect(() => {

        const initialFetch = async () => {
            switchPropertiesLoader(true)
            let result = await fetchAllProperties()
            setProperties(result)
            switchPropertiesLoader(false)
        }

        initialFetch()
    }, [])

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
                <Search
                    search={search}
                    onSearch={setSearch}
                />
                {
                    filteredProperties.length > 0 &&
                    filteredProperties.map((prop, index) => {
                        return (
                            <TouchableOpacity onPress={() => onSuggestionPress(prop)}
                                style={styles.propSuggestion}
                                key={prop.id}
                            >
                                <Text
                                    value={prop.name} caption medium color={colors.text.secondary}
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>

            <Map region={region} setRegion={setRegion} properties={properties} naviagtion={navigation} />
        </Container>
    )
}

export default Home

const styles = StyleSheet.create({
    propSuggestion: {
        borderColor: colors.ui.disabled,
        backgroundColor: colors.ui.tertiary,
        borderWidth: 1,
        marginVertical: 5,
        padding: 5,
        borderRadius: 5
    }
})