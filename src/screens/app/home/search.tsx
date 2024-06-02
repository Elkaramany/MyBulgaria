import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Input } from '@components'
import { SearchIcon } from '@assets'
import { colors } from 'config'

interface Props {
    search: string
    onSearch: (val: string) => void
}

const Index: React.FC<Props> = ({ search, onSearch }) => {
    return (
        <View>
            <Input
                value={search}
                onChangeText={onSearch}
                placeholder='Search'
                leftIcon={<SearchIcon fill={colors.brand.primary} />}
                placeholderTextColor={colors.brand.primary}
            />
        </View>
    )
}

export default Index

const styles = StyleSheet.create({})