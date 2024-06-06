import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text } from '@components'
import { HEIGHT, WIDTH, colors, globalStyles } from '@config'
import { CheckMark, HazardMark, HeartIcon } from '@assets'
import { PropertyType } from '@redux'

interface Props {
    property: PropertyType
}

const Todo: React.FC<Props> = ({ property }) => {

    const renderItem = ({ item, index }: { item: number, index: number }) => {
        return (
            <View key={index} style={styles.container}>
                <Image
                    style={styles.coverImage}
                    source={{ uri: `${process.env.EXPO_PUBLIC_API_BASE}${property.Avatar.formats.medium.url}` }}
                />
                <TouchableOpacity style={[globalStyles.whiteIconBg, { position: 'absolute', top: 13, right: 12, width: 30, height: 30 }]}>
                    <HeartIcon fill={colors.brand.primary} width={15} height={10} />
                </TouchableOpacity>
                <View style={{ height: 2, width: 'auto', backgroundColor: colors.brand.primary }} />
                <View style={styles.infoContainer}>
                    <Text
                        value='Rila Monastery bike tour' body lightBold color={colors.text.secondary}
                    />

                    <Text
                        value='Dictumst scelerisque ut commodo gravida.' button regular color={colors.text.tertiary}
                    />

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CheckMark />
                        <Text
                            value='Recommended' button regular color={colors.text.tertiary}
                            style={{ marginLeft: 7 }}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <HazardMark fill={'#139CE9'} />
                        <Text
                            value='Easy level' button regular color={colors.text.tertiary}
                            style={{ marginLeft: 7 }}
                        />
                    </View>
                    <Text
                        value='$$-$$$' button regular color={colors.text.tertiary}
                    />
                </View>
            </View >
        )
    }

    return (
        <View style={{ marginBottom: 15 }}>
            <View>
                <Text
                    value='Things to do' h4 bold color={colors.text.secondary} style={{ marginVertical: 15 }}
                />
                <FlatList
                    horizontal
                    data={[1, 2, 3]}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => `${index}`}
                />
            </View>
        </View>
    )
}

export default Todo

const styles = StyleSheet.create({
    coverImage: {
        width: 'auto',
        height: HEIGHT * 0.125,
        resizeMode: 'cover',
        borderTopRightRadius: 13,
        borderTopLeftRadius: 13,
    },
    container: {
        width: WIDTH * 0.55,
        borderRadius: 16,
        marginRight: 10,
        borderWidth: 2,
        borderColor: colors.brand.primary,
    }, infoContainer: {
        padding: 15,
    }
})