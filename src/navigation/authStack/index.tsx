import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackParamList } from './types'

import { Login, SignIn, SignUp } from '@screens';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}
      initialRouteName={'Login'}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
