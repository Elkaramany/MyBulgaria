import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Text } from '@components'
import { BellIcon } from '@assets'
import { colors, globalStyles, WIDTH } from '@config'
import { MainStackNavigationProp } from '@navigationTypes'

interface Props {
    navigation: MainStackNavigationProp<'Leaderboard'>
    items: any[]
}

const TopThree: React.FC<Props> = ({ navigation, items }) => {
    const renderTopItem = (position: number, zIndex: number, widthMultiplier: number) => (
        <View style={{ flexDirection: 'row', justifyContent: 'center', zIndex }}>
            {position !== 3 && (
                <View style={[styles.numberContainer, { zIndex: zIndex + 1, left: 5 }]}>
                    <Text value={`${position}º`} bold body color={colors.text.secondary} />
                </View>
            )}
            <Image
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/74ba/bc96/daf95cacc1fd1aecf699b39fbbb64e0c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F-G7fAMtEQi6AUiNBZXB2P1jMtKMy5Po5UFZXAdw9bGrBvvl4~2kNzvUa7ls38Q8hgqtMdi6~CWnKiaTz1Pa30WsIRyXXNM3HaqJZomzwWcWeCvBtvshBNMfxu4rBg6Awo0sgrvsILpN-vC37O7k2w1cVHLl1KwipVHk5sDPgRPH1byuzZO06P6zMqugcoE4IDS2Gi2m84do0lJl0eh00avv8-FY3NtX3FPvGvCbifoxSkTKmSuUCRIjx6WI9cp2SD-dFuO5mA3MdrFxULEYbKqDX3ldelWT4OX1fnwrawN6S-OPgv72WSBN9n14R65tEZq3Uo1vh8WpZ6umPi-iuA__' }}
                style={[
                    styles.profileImage,
                    { width: WIDTH * widthMultiplier, height: WIDTH * widthMultiplier }
                ]}
            />
            {position === 3 && (
                <View style={[styles.numberContainer, { zIndex: zIndex + 1, left: WIDTH * widthMultiplier - 25, }]}>
                    <Text value={`${position}º`} bold body color={colors.text.secondary} />
                </View>
            )}
        </View>
    );

    const top3Items = () => (
        <View style={{ bottom: WIDTH * 0.2 }}>
            <View style={{ top: WIDTH * 0.2, flexDirection: 'row', width: '100%', justifyContent: 'center', zIndex: 5 }}>
                {renderTopItem(1, 5, 0.36)}
            </View>
            <View style={globalStyles.rowBetween}>
                {items.length > 2 && renderTopItem(2, 3, 0.26)}
                {items.length > 1 && renderTopItem(3, 1, 0.26)}
            </View>
        </View>
    );

    const checkItemsLength = () => {
        if (items.length === 0) {
            return <Text value='No data available' title lightBold color={colors.text.secondary} />;
        }
        return top3Items();
    };

    return (
        <>
            <View style={[globalStyles.rowBetween, { marginTop: 25 }]}>
                <Text value='Leaderboard' lightBold h3 color={colors.text.secondary} />
                <TouchableOpacity style={styles.bellContainer}>
                    <BellIcon fill={colors.brand.primary} />
                </TouchableOpacity>
            </View>
            {checkItemsLength()}
        </>
    );
};

export default TopThree;

const styles = StyleSheet.create({
    bellContainer: {
        borderWidth: 2,
        borderColor: colors.brand.primary,
        borderRadius: 12,
        padding: 8,
    },
    profileImage: {
        resizeMode: 'cover',
        borderRadius: WIDTH * 0.36,
        borderWidth: 4,
        borderColor: colors.brand.primary,
        alignSelf: 'center',
    },
    numberContainer: {
        height: 28,
        width: 28,
        borderRadius: 28,
        backgroundColor: '#D9D9D9',
        borderWidth: 2,
        borderColor: colors.brand.primary,
        ...globalStyles.centeredContainer,
        position: 'absolute',
    },
});
