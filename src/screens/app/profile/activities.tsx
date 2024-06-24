import { StyleSheet, View, FlatList, Image } from 'react-native'
import React from 'react'
import { Text } from 'components'
import { HEIGHT, WIDTH, colors } from '@config'

interface Activity {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

const defaultActivities: Activity[] = [
    {
        id: 1,
        title: 'Rila Monastery bike tour',
        description: 'Dictumst scelerisque ut commodo gravida.',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/74ba/bc96/daf95cacc1fd1aecf699b39fbbb64e0c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F-G7fAMtEQi6AUiNBZXB2P1jMtKMy5Po5UFZXAdw9bGrBvvl4~2kNzvUa7ls38Q8hgqtMdi6~CWnKiaTz1Pa30WsIRyXXNM3HaqJZomzwWcWeCvBtvshBNMfxu4rBg6Awo0sgrvsILpN-vC37O7k2w1cVHLl1KwipVHk5sDPgRPH1byuzZO06P6zMqugcoE4IDS2Gi2m84do0lJl0eh00avv8-FY3NtX3FPvGvCbifoxSkTKmSuUCRIjx6WI9cp2SD-dFuO5mA3MdrFxULEYbKqDX3ldelWT4OX1fnwrawN6S-OPgv72WSBN9n14R65tEZq3Uo1vh8WpZ6umPi-iuA__'
    },
    {
        id: 2,
        title: 'Lorem Ipsum Activity',
        description: 'Consectetur adipiscing elit. Pellentesque vitae pretium urna.',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/74ba/bc96/daf95cacc1fd1aecf699b39fbbb64e0c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F-G7fAMtEQi6AUiNBZXB2P1jMtKMy5Po5UFZXAdw9bGrBvvl4~2kNzvUa7ls38Q8hgqtMdi6~CWnKiaTz1Pa30WsIRyXXNM3HaqJZomzwWcWeCvBtvshBNMfxu4rBg6Awo0sgrvsILpN-vC37O7k2w1cVHLl1KwipVHk5sDPgRPH1byuzZO06P6zMqugcoE4IDS2Gi2m84do0lJl0eh00avv8-FY3NtX3FPvGvCbifoxSkTKmSuUCRIjx6WI9cp2SD-dFuO5mA3MdrFxULEYbKqDX3ldelWT4OX1fnwrawN6S-OPgv72WSBN9n14R65tEZq3Uo1vh8WpZ6umPi-iuA__'
    },
    {
        id: 3,
        title: 'Another Activity',
        description: 'Vestibulum maximus magna a sapien feugiat, sed vestibulum neque finibus.',
        imageUrl: 'https://s3-alpha-sig.figma.com/img/74ba/bc96/daf95cacc1fd1aecf699b39fbbb64e0c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F-G7fAMtEQi6AUiNBZXB2P1jMtKMy5Po5UFZXAdw9bGrBvvl4~2kNzvUa7ls38Q8hgqtMdi6~CWnKiaTz1Pa30WsIRyXXNM3HaqJZomzwWcWeCvBtvshBNMfxu4rBg6Awo0sgrvsILpN-vC37O7k2w1cVHLl1KwipVHk5sDPgRPH1byuzZO06P6zMqugcoE4IDS2Gi2m84do0lJl0eh00avv8-FY3NtX3FPvGvCbifoxSkTKmSuUCRIjx6WI9cp2SD-dFuO5mA3MdrFxULEYbKqDX3ldelWT4OX1fnwrawN6S-OPgv72WSBN9n14R65tEZq3Uo1vh8WpZ6umPi-iuA__'
    }
];

const Activities = () => {

    const renderItem = ({ item }: { item: Activity }) => {
        return (
            <View style={styles.activityContainer}>
                <Image
                    style={styles.activityImage}
                    source={{ uri: item.imageUrl }}
                />
                <View style={{ height: 2, width: '100%', backgroundColor: colors.brand.primary }} />

                <View style={{ paddingHorizontal: 15 }}>
                    <Text
                        value={item.title}
                        lightBold
                        body
                        color={colors.text.secondary}
                    />

                    <Text
                        value={item.description}
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
                value='Newest Activities' lightBold h3 color='#4B566C'
            />

            {defaultActivities.length > 0 ?
                <FlatList
                    data={defaultActivities}
                    renderItem={renderItem}
                    keyExtractor={(item) => `${item.id}`}
                    horizontal
                />
                :
                <Text value='No Activities yet' h4 lightBold color={colors.text.secondary} />
            }
        </View>
    )
}

export default Activities

const styles = StyleSheet.create({
    activityContainer: {
        borderWidth: 2,
        borderColor: colors.brand.primary,
        borderRadius: 16,
        width: WIDTH * 0.6,
        height: HEIGHT * 0.22,
        marginHorizontal: 5,
    },
    activityImage: {
        width: '100%',
        height: '54%',
        resizeMode: 'cover',
        borderRadius: 15,
    }
})
