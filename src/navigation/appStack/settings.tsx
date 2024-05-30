import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Settings } from '@screens'

const Stack = createStackNavigator();

const SettingsStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}
            initialRouteName={'SettingsIndex'}
        >
            <Stack.Screen name="SettingsIndex" component={Settings} />

        </Stack.Navigator>
    );
};

export default SettingsStackNavigator;