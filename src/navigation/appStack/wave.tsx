import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Home } from '@screens'

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}
            initialRouteName={'HomeIndex'}
        >
            <Stack.Screen name="HomeIndex" component={Home} />

        </Stack.Navigator>
    );
};

export default HomeStackNavigator;