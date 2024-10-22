import React from "react";
import { View } from 'react-native'
import { colors, IOS } from '@config';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { NavigationContainer } from '@react-navigation/native';

import Auth from './authStack'
import App from './appStack'
import { useAuthActions } from "@redux";

const MainNavigator = () => {
  const { id } = useAuthActions()
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg.primary }}>
      <NavigationContainer>
        {id >= 0 ?
          <App />
          :
          <Auth />
        }
      </NavigationContainer>
    </View>
  );
};

export default MainNavigator;
