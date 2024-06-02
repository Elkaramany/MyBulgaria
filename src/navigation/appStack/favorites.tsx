import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Favorites } from '@screens'

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}
            initialRouteName={'FavoritesIndex'}
        >
            <Stack.Screen name="FavoritesIndex" component={Favorites} />

        </Stack.Navigator>
    );
};

export default HomeStackNavigator;