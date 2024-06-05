import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Tabs from './Tabs'
import { PropertyDetails } from "@screens";
import { MainStackParamList } from "./types";

const Stack = createStackNavigator<MainStackParamList>();

const TabsStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}
            initialRouteName={'Tabs'}
        >
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="PropertyDetails" component={PropertyDetails} />
        </Stack.Navigator>
    );
};

export default TabsStackNavigator;
