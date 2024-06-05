import {
    createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import Home from './home'
import Prizes from './prizes'
import Profile from './profile'
import Favorites from "./favorites";

import { globalStyles, colors, IOS, HEIGHT, WIDTH } from "@config";
import { logo, HomeIcon, PrizeIcon, ProfileIcon, HeartIcon, HomeFillIcon } from '@assets'
import { Text } from "@components";
import { BottomTabParamList } from "./types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const WaveButton = () => {
    return (
        <TouchableWithoutFeedback style={{ backgroundColor: 'blue' }}>
            <View style={styles.waveStyle}>

            </View>
        </TouchableWithoutFeedback>
    );
};

export default () => {

    return (
        <BottomTab.Navigator
            initialRouteName={'Home'}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                unmountOnBlur: true,
                tabBarStyle: styles.tabStyle,
            }}

        >
            <BottomTab.Screen
                name={"Home"}
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.bottomTabContainer}>
                                <HomeIcon fill={colors.bg.primary} />
                                <Text value="Home" button medium />
                            </View>
                        );
                    },
                }}
            />

            <BottomTab.Screen
                name={"Favorites"}
                component={Favorites}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={[styles.bottomTabContainer, { borderTopRightRadius: 25 }]}>
                                <HeartIcon fill={colors.bg.primary} />
                                <Text value="Favorites" button medium />
                            </View>
                        );
                    },
                }}
            />

            <BottomTab.Screen
                name={"Wave"}
                component={() => null}
                options={{
                    tabBarButton: () => <WaveButton />,
                }}
            />

            <BottomTab.Screen
                name={"Prizes"}
                component={Prizes}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={[styles.bottomTabContainer, { borderTopLeftRadius: 25 }]}>
                                <PrizeIcon fill={colors.bg.primary} />
                                <Text value="Ranking" button medium />
                            </View>
                        );
                    },
                }}
            />

            <BottomTab.Screen
                name={"Profile"}
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.bottomTabContainer}>
                                <ProfileIcon fill={colors.bg.primary} />
                                <Text value="Profile" button medium />
                            </View>
                        );
                    },
                }}
            />
        </BottomTab.Navigator>
    );
};

const styles = StyleSheet.create({
    bottomTabContainer: {
        ...globalStyles.centeredContainer,
        backgroundColor: colors.brand.secondary,
        width: WIDTH * 0.25,
        height: '100%'
    },
    tabText: {
        fontSize: scale(10),
        marginTop: scale(3)
    }, tabStyle: {
        height: HEIGHT * 0.1,
        backgroundColor: 'transparent'
    }, waveStyle: {
        backgroundColor: colors.brand.secondary,
        width: WIDTH * 0.2,
        top: HEIGHT * 0.03,
        height: HEIGHT * 0.07,
    }
})