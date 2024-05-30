import React from 'react'
import { View } from 'react-native'
import { colors, IOS } from '@config';

//Redux
import Redux from '@redux'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

//navigation
import Navigator from '@navigation'

export default () => {
  return (
    <Provider store={Redux['store']}>
      <View style={{ flex: 1, backgroundColor: colors.bg.primary }}>
        <PersistGate loading={null} persistor={Redux['persistor']}>
          <Navigator />
        </PersistGate>
      </View>
    </Provider>
  )
}