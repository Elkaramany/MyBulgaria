import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
} from 'expo-font';

// Redux
import Redux from '@redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

// Navigation
import Navigator from '@navigation';
import { homeBG } from '@assets';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default () => {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  React.useEffect(() => {
    if (fontsLoaded) {
      onLayoutRootView();
    }
  }, [fontsLoaded, onLayoutRootView]);

  if (!fontsLoaded) {
    return <Image source={homeBG} style={styles.fullScreenImage} />;
  }

  return (
    <View style={styles.container}>
      <Provider store={Redux['store']}>
        <PersistGate loading={null} persistor={Redux['persistor']}>
          <Navigator />
        </PersistGate>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullScreenImage: {
    width: '100%',
    height: '100%',
  },
});
