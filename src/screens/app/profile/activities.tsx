import { StyleSheet, View, FlatList, Image } from 'react-native'
import React from 'react'
import { Text } from 'components'
import { HEIGHT, WIDTH, colors } from '@config'

const activities = () => {

    const renderItem = ({ item }: any) => {
        return (
            <View style={styles.activityContainer}>
                <Image
                    style={styles.activityImage}
                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/74ba/bc96/daf95cacc1fd1aecf699b39fbbb64e0c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F-G7fAMtEQi6AUiNBZXB2P1jMtKMy5Po5UFZXAdw9bGrBvvl4~2kNzvUa7ls38Q8hgqtMdi6~CWnKiaTz1Pa30WsIRyXXNM3HaqJZomzwWcWeCvBtvshBNMfxu4rBg6Awo0sgrvsILpN-vC37O7k2w1cVHLl1KwipVHk5sDPgRPH1byuzZO06P6zMqugcoE4IDS2Gi2m84do0lJl0eh00avv8-FY3NtX3FPvGvCbifoxSkTKmSuUCRIjx6WI9cp2SD-dFuO5mA3MdrFxULEYbKqDX3ldelWT4OX1fnwrawN6S-OPgv72WSBN9n14R65tEZq3Uo1vh8WpZ6umPi-iuA__' }}
                />
                <View style={{ height: 2, width: '100%', backgroundColor: colors.brand.primary }} />

                <View style={{ paddingHorizontal: 15 }}>
                    <Text
                        value='Rila Monastery bike tour'
                        lightBold
                        body
                        color={colors.text.secondary}
                    />

                    <Text
                        value='Dictumst scelerisque ut commodo gravida.'
                        regular
                        button
                        color={colors.text.secondary}
                    />
                </View>
            </View>
        )
    }

    return (
        <View>
            <Text
                value='Newest Activites' lightBold h3 color='#4B566C'
            />

            <FlatList
                data={[1, 2, 3]}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${index}`}
                horizontal
            />
        </View>
    )
}

export default activities

const styles = StyleSheet.create({
    activityContainer: {
        borderWidth: 2,
        borderColor: colors.brand.primary,
        borderRadius: 16,
        width: WIDTH * 0.6,
        height: HEIGHT * 0.22,
        marginHorizontal: 5,
    }, activityImage: {
        width: '100%',
        height: '54%',
        resizeMode: 'cover',
        borderRadius: 15,
    }
})