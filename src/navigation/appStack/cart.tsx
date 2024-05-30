import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Cart } from '@screens'

const Stack = createStackNavigator();

const CartStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}
            initialRouteName={'CartIndex'}
        >
            <Stack.Screen name="CartIndex" component={Cart} />

        </Stack.Navigator>
    );
};

export default CartStackNavigator;