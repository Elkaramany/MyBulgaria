import React from 'react'
import { View } from 'react-native'
import { colors, IOS } from '@config';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins';

//Redux
import Redux from '@redux'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

//navigation
import Navigator from '@navigation'

export default () => {
  const [appIsReady, setAppIsReady] = React.useState(false);
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  React.useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady && fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded]);

  if (!appIsReady || !fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }} onLayout={onLayoutRootView}>
      <Provider store={Redux['store']}>
        <View
          style={{ flex: 1 }}>
          <PersistGate loading={null} persistor={Redux['persistor']}>
            <Navigator />
          </PersistGate>
        </View>
      </Provider>
    </View>
  )
}