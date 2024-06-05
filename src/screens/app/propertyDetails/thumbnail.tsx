import { ImageBackground, StyleSheet, Share, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MainStackNavigationProp } from 'navigation/types'
import { HEIGHT, colors, globalStyles } from '@config'
import { HeartIcon, LeftArrowIcon, ShareIcon } from '@assets'
import { scale } from 'react-native-size-matters'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { PropertyType } from '@redux'

interface Props {
    property: PropertyType
    navigation: MainStackNavigationProp<'PropertyDetails'>

}

const PropertyDetails: React.FC<Props> = ({ property, navigation }) => {

    return (
        <ImageBackground
            source={{ uri: `${process.env.EXPO_PUBLIC_API_BASE}${property.Avatar.formats.medium.url}` }}
            style={{ height: HEIGHT * 0.32, width: '100%' }}
            resizeMode='contain'
        >
            <View style={[globalStyles.rowBetween, { paddingTop: getStatusBarHeight(), paddingHorizontal: scale(36) }]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <LeftArrowIcon fill={colors.bg.primary} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => {
                            Share.share({
                                message: property.description,
                                title: property.name
                            })
                        }}
                        style={styles.topIcon}>
                        <ShareIcon fill={colors.brand.primary} width={15} height={18} />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.topIcon, { left: 15 }]}>
                        <HeartIcon fill={colors.brand.primary} width={18} height={15} />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default PropertyDetails

const styles = StyleSheet.create({
    topIcon: {
        backgroundColor: colors.bg.primary,
        height: 38,
        width: 38,
        borderRadius: 38,
        ...globalStyles.centeredContainer
    }
})