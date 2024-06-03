import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Input } from '@components'
import { FilterIcon, SearchIcon } from '@assets'
import { WIDTH, colors } from 'config'

interface Props {
    search: string
    onSearch: (val: string) => void
}

const Index: React.FC<Props> = ({ search, onSearch }) => {
    return (
        <>
            <Input
                value={search}
                onChangeText={onSearch}
                placeholder='Search'
                leftIcon={<SearchIcon fill={colors.brand.primary} />}
                onLeftIconPress={() => { }}
                rightIcon={<FilterIcon fill={colors.brand.primary} />}
                onRightIconPress={() => { }}
                placeholderTextColor={colors.brand.primary}
                buttonStyle={{ width: WIDTH * 0.8 }}
            />
        </>
    )
}

export default Index

const styles = StyleSheet.create({})