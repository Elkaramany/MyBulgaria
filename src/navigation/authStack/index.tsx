import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackParamList } from './types'

import { Welcome, SignIn, SignUp } from '@screens';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}
      initialRouteName={'Welcome'}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
