import {
    createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import Home from './home'
import Cart from './cart'
import Settings from './settings'

import { globalStyles, colors } from "@config";
import { logo } from '@assets'

const BottomTab = createBottomTabNavigator();

export default () => {

    return (
        <BottomTab.Navigator
            initialRouteName={'Home'}
            tabB
            screenOptions={{
                activeTintColor: '#979797',
                inactiveTintColor: colors.ui.disabled,
                headerShown: false,
                tabBarShowLabel: false,
                unmountOnBlur: true,
                tabBarStyle: { backgroundColor: colors.bg.primary },
            }}
        >
            <BottomTab.Screen
                name={"Home"}
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.bottomTabContainer}>
                                <Image
                                    source={logo}
                                    resizeMode={'contain'}
                                    style={{ width: 25, height: 25 }}
                                />
                            </View>
                        );
                    },
                }}
            />

            <BottomTab.Screen
                name={"Cart"}
                component={Cart}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.bottomTabContainer}>
                                <Image
                                    source={logo}
                                    resizeMode={'contain'}
                                    style={{ width: 25, height: 25 }}
                                />
                            </View>
                        );
                    },
                }}
            />

            <BottomTab.Screen
                name={"Settings"}
                component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.bottomTabContainer}>
                                <Image
                                    source={logo}
                                    resizeMode={'contain'}
                                    style={{ width: 25, height: 25 }}
                                />
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
        top: verticalScale(5),
        padding: verticalScale(5)
    },
    tabText: {
        fontSize: scale(10),
        marginTop: scale(3)
    }
})