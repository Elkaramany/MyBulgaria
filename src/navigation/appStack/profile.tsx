import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Profile } from '@screens'

const Stack = createStackNavigator();

const SettingsStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}
            initialRouteName={'ProfileIndex'}
        >
            <Stack.Screen name="ProfileIndex" component={Profile} />

        </Stack.Navigator>
    );
};

export default SettingsStackNavigator;