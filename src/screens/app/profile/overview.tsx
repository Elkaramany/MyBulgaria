import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Button, Text } from '@components'
import { useAuthActions } from '@redux'
import { HEIGHT, WIDTH, colors, globalStyles } from 'config'
import { BellIcon, GreyCheck } from '@assets'
import { MainStackNavigationProp } from '@navigationTypes'

interface Props {
    navigation: MainStackNavigationProp<'Tabs'>
}

interface ProfileData {
    profileImage: string;
    name: string;
    handle: string;
    bio: string;
    history: {
        title: string;
        score: number;
    }[];
}

const defaultProfileData: ProfileData = {
    profileImage: 'https://s3-alpha-sig.figma.com/img/74ba/bc96/daf95cacc1fd1aecf699b39fbbb64e0c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F-G7fAMtEQi6AUiNBZXB2P1jMtKMy5Po5UFZXAdw9bGrBvvl4~2kNzvUa7ls38Q8hgqtMdi6~CWnKiaTz1Pa30WsIRyXXNM3HaqJZomzwWcWeCvBtvshBNMfxu4rBg6Awo0sgrvsILpN-vC37O7k2w1cVHLl1KwipVHk5sDPgRPH1byuzZO06P6zMqugcoE4IDS2Gi2m84do0lJl0eh00avv8-FY3NtX3FPvGvCbifoxSkTKmSuUCRIjx6WI9cp2SD-dFuO5mA3MdrFxULEYbKqDX3ldelWT4OX1fnwrawN6S-OPgv72WSBN9n14R65tEZq3Uo1vh8WpZ6umPi-iuA__',
    name: 'John Doe',
    handle: '@johndoe',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare leo a ex auctor.',
    history: [
        { title: 'Places Visited', score: 32 },
        { title: 'Achievements', score: 16 },
        { title: 'Lorem Ipsum', score: 15 },
    ]
};

const Overview: React.FC<Props> = ({ navigation }) => {
    const { name } = useAuthActions()

    const profileData: ProfileData = {
        ...defaultProfileData,
        name: name || defaultProfileData.name // Use name from authentication or default name
    };

    const renderHistory = (title: string, score: number) => {
        return (
            <View key={`${title}${score}`} style={globalStyles.centeredContainer}>
                <Text value={title} lightBold button color={colors.text.secondary} />
                <Text value={score.toString()} lightBold h2 color={colors.text.secondary} />
            </View>
        )
    }

    return (
        <View style={{ marginBottom: 20 }}>
            <View style={globalStyles.rowBetween}>
                <Text
                    value='Profile' lightBold h3 color={colors.text.secondary}
                />

                <TouchableOpacity style={globalStyles.iconContainer}>
                    <BellIcon fill={colors.brand.primary} />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                <Image
                    source={{ uri: profileData.profileImage }}
                    style={styles.profileImage}
                />

                <GreyCheck style={{ right: 35 }} />

                <TouchableOpacity onPress={() => navigation.navigate('Leaderboard')}>
                    <Text
                        style={{ textDecorationLine: 'underline' }}
                        value='Leaderboard'
                        title
                        bold
                        color={colors.text.secondary} />
                </TouchableOpacity>
            </View>
            <Text
                value={profileData.name} lightBold h2 color={colors.text.secondary}
            />

            <Text
                value={profileData.handle} lightBold button color={colors.text.overview}
            />

            <Text
                value={profileData.bio} lightBold caption color={colors.text.overview}
            />

            <View style={globalStyles.rowBetween}>
                {profileData.history.map((item, index) => renderHistory(item.title, item.score))}
            </View>
        </View>
    )
}

export default Overview

const styles = StyleSheet.create({
    profileImage: {
        width: WIDTH * 0.36,
        height: HEIGHT * 0.175,
        resizeMode: 'cover',
        borderRadius: WIDTH * 0.36,
        borderWidth: 4,
        borderColor: colors.brand.primary
    }
})
