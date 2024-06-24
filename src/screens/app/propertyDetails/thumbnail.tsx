import { Image, StyleSheet, Share, TouchableOpacity, View, FlatList } from 'react-native'
import React from 'react'
import { MainStackNavigationProp } from 'navigation/types'
import { Text } from '@components'
import { HEIGHT, WIDTH, colors, globalStyles } from '@config'
import { HeartIcon, LeftArrowIcon, ShareIcon } from '@assets'
import { scale } from 'react-native-size-matters'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { GalleryImage, PropertyType } from '@redux'

interface Props {
    property: PropertyType
    navigation: MainStackNavigationProp<'PropertyDetails'>
}

const Thumbnail: React.FC<Props> = ({ property, navigation }) => {
    const [currIndex, setCurrIndex] = React.useState(0)

    // Handle default values for missing or invalid property object
    const defaultProperty: Partial<PropertyType> = {
        Gallery: [],
        name: 'Name unavailable',
        description: 'Description unavailable'
        // Add more default properties here as needed
    }

    const onViewableItemsChanged = React.useRef(({ viewableItems }: { viewableItems: any }) => {
        if (viewableItems.length > 0) {
            setCurrIndex(viewableItems[0].index);
        }
    }).current;

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50,
    };

    const renderItem = ({ item }: { item: GalleryImage }) => {
        const imageUrl = item && item.url ? `${process.env.EXPO_PUBLIC_API_BASE}${item.url}` : 'https://cdn.pixabay.com/photo/2014/04/03/00/38/house-308936_640.png';
        return (
            <Image
                source={{ uri: imageUrl }}
                style={{ height: HEIGHT * 0.32, width: WIDTH }}
                resizeMode='cover'
            />
        )
    }

    // Use default property values if property is missing or invalid
    const { Gallery = [], name = 'Name unavailable', description = 'Description unavailable' } = property || defaultProperty;

    return (
        <View>
            <FlatList
                horizontal
                pagingEnabled
                data={Gallery.length === 0 ? [1] : Gallery}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${index}`}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
            />
            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <LeftArrowIcon fill={colors.bg.primary} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => {
                            Share.share({
                                message: description,
                                title: name
                            })
                        }}
                        style={globalStyles.whiteIconBg}>
                        <ShareIcon fill={colors.brand.primary} width={15} height={18} />
                    </TouchableOpacity>

                    <TouchableOpacity style={[globalStyles.whiteIconBg, { left: 15 }]}>
                        <HeartIcon fill={colors.brand.primary} width={18} height={15} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={[globalStyles.rowBetween, { bottom: 5, width: WIDTH, position: 'absolute' }]}>
                <View />
                <View style={globalStyles.rowCenter}>
                    {
                        Gallery.map((item, index) => {
                            if (index === currIndex) return <View style={styles.selectedDot} key={index} />
                            return <View key={index} style={styles.unselectedDot} />
                        })
                    }
                </View>
                <View style={styles.indexContainer}>
                    <Text value={`${currIndex + 1} / ${Gallery.length}`}
                        medium
                        button
                    />
                </View>
            </View>
        </View>
    )
}

export default Thumbnail

const styles = StyleSheet.create({
    iconsContainer: {
        paddingTop: getStatusBarHeight(),
        paddingHorizontal: scale(36),
        position: 'absolute',
        width: '100%',
        ...globalStyles.rowBetween,
    },
    unselectedDot: {
        height: 5,
        width: 5,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginRight: 5,
    },
    selectedDot: {
        width: 10,
        height: 5,
        borderRadius: 5,
        backgroundColor: colors.bg.primary,
        marginRight: 5,
    },
    indexContainer: {
        backgroundColor: '#1E1E1EB2',
        borderRadius: 4,
        width: 47,
        height: 24,
        ...globalStyles.centeredContainer,
        bottom: 8,
        right: 25
    }
})
