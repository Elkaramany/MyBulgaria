import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Prizes } from '@screens'

const Stack = createStackNavigator();

const CartStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}
            initialRouteName={'PrizesIndex'}
        >
            <Stack.Screen name="PrizesIndex" component={Prizes} />

        </Stack.Navigator>
    );
};

export default CartStackNavigator;