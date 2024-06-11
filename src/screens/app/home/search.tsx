import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import { Input, Text } from '@components'
import { FilterIcon, SearchIcon } from '@assets'
import { WIDTH, colors } from 'config'
import { PropertyType } from '@redux'

interface Props {
    search: string
    onSearch: (val: string) => void
    filteredProperties: PropertyType[]
    onSuggestionPress: (val: PropertyType) => void
    onFilterPress: () => void
}

const Index: React.FC<Props> = ({ search, onSearch, filteredProperties, onSuggestionPress, onFilterPress }) => {
    return (
        <>
            <Input
                value={search}
                onChangeText={onSearch}
                placeholder='Search'
                leftIcon={<SearchIcon fill={colors.brand.primary} />}
                onLeftIconPress={() => { }}
                rightIcon={<FilterIcon fill={colors.brand.primary} />}
                onRightIconPress={onFilterPress}
                placeholderTextColor={colors.brand.primary}
                buttonStyle={{ width: WIDTH * 0.8 }}
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
        </>
    )
}

export default Index


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