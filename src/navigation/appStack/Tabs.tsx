import {
    createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { scale } from "react-native-size-matters";

import Home from './home'
import Prizes from './prizes'
import Profile from './profile'
import Favorites from "./favorites";
import TabsShape from "./tabBarShape";

import { globalStyles, colors, IOS, HEIGHT, WIDTH } from "@config";
import { HomeIcon, PrizeIcon, ProfileIcon, HeartIcon } from '@assets'
import { Text } from "@components";
import { BottomTabParamList } from "./types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();


export default () => {

    return (
        <BottomTab.Navigator
            initialRouteName={'Home'}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
            tabBar={(props) => <TabsShape {...props} />}
        >
            <BottomTab.Screen
                name={"Home"}
                component={Home}
            />

            <BottomTab.Screen
                name={"Favorites"}
                component={Favorites}
            />


            <BottomTab.Screen
                name={"Prizes"}
                component={Prizes}
            />

            <BottomTab.Screen
                name={"Profile"}
                component={Profile}
            />
        </BottomTab.Navigator>
    );
};