import { FlatList, StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Text } from 'components'
import { colors, globalStyles, HEIGHT, WIDTH } from '@config'
import { FilterIcon, HeartIcon } from '@assets'

// Define dummy data structure
const defaultData = [
    {
        id: 1,
        date: 'January 15, 2023',
        title: 'Card title 1',
        type: 'Hiking',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/74ba/bc96/daf95cacc1fd1aecf699b39fbbb64e0c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F-G7fAMtEQi6AUiNBZXB2P1jMtKMy5Po5UFZXAdw9bGrBvvl4~2kNzvUa7ls38Q8hgqtMdi6~CWnKiaTz1Pa30WsIRyXXNM3HaqJZomzwWcWeCvBtvshBNMfxu4rBg6Awo0sgrvsILpN-vC37O7k2w1cVHLl1KwipVHk5sDPgRPH1byuzZO06P6zMqugcoE4IDS2Gi2m84do0lJl0eh00avv8-FY3NtX3FPvGvCbifoxSkTKmSuUCRIjx6WI9cp2SD-dFuO5mA3MdrFxULEYbKqDX3ldelWT4OX1fnwrawN6S-OPgv72WSBN9n14R65tEZq3Uo1vh8WpZ6umPi-iuA__'
    },
    {
        id: 2,
        date: 'January 16, 2023',
        title: 'Card title 2',
        type: 'Cycling',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/74ba/bc96/daf95cacc1fd1aecf699b39fbbb64e0c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F-G7fAMtEQi6AUiNBZXB2P1jMtKMy5Po5UFZXAdw9bGrBvvl4~2kNzvUa7ls38Q8hgqtMdi6~CWnKiaTz1Pa30WsIRyXXNM3HaqJZomzwWcWeCvBtvshBNMfxu4rBg6Awo0sgrvsILpN-vC37O7k2w1cVHLl1KwipVHk5sDPgRPH1byuzZO06P6zMqugcoE4IDS2Gi2m84do0lJl0eh00avv8-FY3NtX3FPvGvCbifoxSkTKmSuUCRIjx6WI9cp2SD-dFuO5mA3MdrFxULEYbKqDX3ldelWT4OX1fnwrawN6S-OPgv72WSBN9n14R65tEZq3Uo1vh8WpZ6umPi-iuA__'
    },
    {
        id: 3,
        date: 'January 17, 2023',
        title: 'Card title 3',
        type: 'Running',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/74ba/bc96/daf95cacc1fd1aecf699b39fbbb64e0c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F-G7fAMtEQi6AUiNBZXB2P1jMtKMy5Po5UFZXAdw9bGrBvvl4~2kNzvUa7ls38Q8hgqtMdi6~CWnKiaTz1Pa30WsIRyXXNM3HaqJZomzwWcWeCvBtvshBNMfxu4rBg6Awo0sgrvsILpN-vC37O7k2w1cVHLl1KwipVHk5sDPgRPH1byuzZO06P6zMqugcoE4IDS2Gi2m84do0lJl0eh00avv8-FY3NtX3FPvGvCbifoxSkTKmSuUCRIjx6WI9cp2SD-dFuO5mA3MdrFxULEYbKqDX3ldelWT4OX1fnwrawN6S-OPgv72WSBN9n14R65tEZq3Uo1vh8WpZ6umPi-iuA__'
    }
];

const List = () => {

    const renderItem = ({ item }: { item: any }) => {
        return (
            <View style={styles.infoContainer}>
                <Image
                    source={{ uri: item.imageUrl }}
                    style={styles.profileImage}
                />
                <View style={{ width: 2, height: HEIGHT * 0.104, backgroundColor: colors.brand.primary }} />

                <View style={[globalStyles.rowAround, { width: '60%' }]}>
                    <View>
                        <Text
                            value={item.title}
                            h4 bold color={colors.text.secondary}
                        />

                        <View style={styles.typeContainer}>
                            {/* Assuming the icon is a placeholder */}
                            <Image
                                source={{ uri: 'https://s3-alpha-sig.figma.com/img/74ba/bc96/daf95cacc1fd1aecf699b39fbbb64e0c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F-G7fAMtEQi6AUiNBZXB2P1jMtKMy5Po5UFZXAdw9bGrBvvl4~2kNzvUa7ls38Q8hgqtMdi6~CWnKiaTz1Pa30WsIRyXXNM3HaqJZomzwWcWeCvBtvshBNMfxu4rBg6Awo0sgrvsILpN-vC37O7k2w1cVHLl1KwipVHk5sDPgRPH1byuzZO06P6zMqugcoE4IDS2Gi2m84do0lJl0eh00avv8-FY3NtX3FPvGvCbifoxSkTKmSuUCRIjx6WI9cp2SD-dFuO5mA3MdrFxULEYbKqDX3ldelWT4OX1fnwrawN6S-OPgv72WSBN9n14R65tEZq3Uo1vh8WpZ6umPi-iuA__' }}
                                style={{ height: 10, width: 10, resizeMode: 'contain', bottom: 1, right: 3 }}
                            />
                            <Text
                                value={item.type}
                                button lightBold color={colors.text.tertiary}
                            />
                        </View>
                    </View>

                    <TouchableOpacity style={globalStyles.iconContainer}>
                        <HeartIcon fill={colors.brand.primary} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <>
            <View style={globalStyles.rowBetween}>
                <Text value='January, 15, 2023' body medium color={colors.text.tertiary} />
                <TouchableOpacity>
                    <FilterIcon fill={colors.brand.primary} />
                </TouchableOpacity>
            </View>

            <FlatList
                data={defaultData}
                renderItem={renderItem}
                keyExtractor={(item) => `${item.id}`}
            />
        </>
    )
}

export default List

const styles = StyleSheet.create({
    infoContainer: {
        width: '100%',
        height: HEIGHT * 0.107,
        borderWidth: 2,
        borderColor: colors.brand.primary,
        borderRadius: 8,
        marginVertical: 10,
        flexDirection: 'row',
    },
    profileImage: {
        width: WIDTH * 0.325,
        height: HEIGHT * 0.102,
        resizeMode: 'cover',
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7
    },
    typeContainer: {
        backgroundColor: colors.bg.tertiary,
        ...globalStyles.rowCenter,
        borderRadius: 4,
        marginTop: 10
    }
})
