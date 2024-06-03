import {
    createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import Home from './home'
import Prizes from './prizes'
import Profile from './profile'
import Favorites from "./favorites";

import { globalStyles, colors, IOS, HEIGHT } from "@config";
import { logo, HomeIcon, PrizeIcon, ProfileIcon, HeartIcon, HomeFillIcon } from '@assets'
import { Text } from "@components";

const BottomTab = createBottomTabNavigator();

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
                            <View style={styles.bottomTabContainer}>
                                <HeartIcon fill={colors.bg.primary} />
                                <Text value="Favorites" button medium />
                            </View>
                        );
                    },
                }}
            />

            <BottomTab.Screen
                name={"Prizes"}
                component={Prizes}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.bottomTabContainer}>
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
        top: IOS ? 8 : 5
    },
    tabText: {
        fontSize: scale(10),
        marginTop: scale(3)
    }, tabStyle: {
        backgroundColor: colors.brand.secondary,
        height: HEIGHT * 0.1,
    }
})