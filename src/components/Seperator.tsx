import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IOS, WIDTH, colors } from '@config'

const Seperator = () => {
    return (
        <View style={styles.container}>
            <Text>Seperator</Text>
        </View>
    )
}

export default Seperator

const styles = StyleSheet.create({
    container: {
        width: WIDTH * 0.8,
        backgroundColor: colors.text.disabled,
        height: 1,
        marginVertical: IOS ? 20 : 15
    }
})