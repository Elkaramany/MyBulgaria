import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Button } from '@components'
import { GoogleSVG, FacebookSVG } from '@assets'
import { colors } from '@config'


const SocialMediaAuth = () => {
    return (
        <View style={{ flex: 1 }}>
            <Button
                value='Continue with Google'
                onPress={() => { }}
                buttonStyle={styles.container}
                textStyle={{ color: colors.text.secondary }}
                icon={<GoogleSVG />}
            />

            <Button
                value='Continue with Facebook'
                onPress={() => { }}
                buttonStyle={styles.container}
                textStyle={{ color: colors.text.secondary }}
                icon={<FacebookSVG />}
            />
        </View>
    )
}

export default SocialMediaAuth

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bg.quaternary
    }
})