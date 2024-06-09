import { StyleSheet, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React from 'react'
import { Text } from '@components'
import { BellIcon } from '@assets'
import { colors, globalStyles, HEIGHT, WIDTH } from '@config'
import { MainStackNavigationProp } from '@navigationTypes'

interface Props {
    items: any[]
}

const TopThree: React.FC<Props> = ({ items }) => {

    const renderItem = ({ item, index }: any) => {
        return (
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Text value={`${index + 4}º`}
                    button lightBold color={colors.text.secondary}
                    style={{ flex: 1 }}
                />
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={{ uri: 'https://s3-alpha-sig.figma.com/img/74ba/bc96/daf95cacc1fd1aecf699b39fbbb64e0c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F-G7fAMtEQi6AUiNBZXB2P1jMtKMy5Po5UFZXAdw9bGrBvvl4~2kNzvUa7ls38Q8hgqtMdi6~CWnKiaTz1Pa30WsIRyXXNM3HaqJZomzwWcWeCvBtvshBNMfxu4rBg6Awo0sgrvsILpN-vC37O7k2w1cVHLl1KwipVHk5sDPgRPH1byuzZO06P6zMqugcoE4IDS2Gi2m84do0lJl0eh00avv8-FY3NtX3FPvGvCbifoxSkTKmSuUCRIjx6WI9cp2SD-dFuO5mA3MdrFxULEYbKqDX3ldelWT4OX1fnwrawN6S-OPgv72WSBN9n14R65tEZq3Uo1vh8WpZ6umPi-iuA__' }}
                            style={styles.profileImage}
                        />
                        <View style={{ width: 2, height: HEIGHT * 0.066, backgroundColor: colors.brand.primary }} />
                    </View>
                    <Text value={item.name}
                        body bold color={colors.text.secondary}
                    />

                    <Text value={item.points}
                        button bold color={colors.text.tertiary}
                    />

                    <View />
                </View>
            </View>
        )
    }

    return (
        <>
            <FlatList
                data={items.slice(3)}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${index}`}
            />
        </>
    );
};

export default TopThree;

const styles = StyleSheet.create({
    container: {
        flex: 9,
        ...globalStyles.rowBetween,
        height: HEIGHT * 0.07,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: colors.brand.primary,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    profileImage: {
        width: WIDTH * 0.2,
        height: HEIGHT * 0.066,
        resizeMode: 'cover',
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7
    }
});
