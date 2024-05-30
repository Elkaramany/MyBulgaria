import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Tabs from './Tabs'

const Stack = createStackNavigator();

const TabsStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}
            initialRouteName={'Tabs'}
        >
            <Stack.Screen name="Tabs" component={Tabs} />
        </Stack.Navigator>
    );
};

export default TabsStackNavigator;
