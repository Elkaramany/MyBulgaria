import { StyleSheet, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Container, Text, Button } from '@components'
import { useAuthActions } from '@redux'
import { HEIGHT, WIDTH, colors, globalStyles } from 'config'
import { BellIcon, GreyCheck } from '@assets'
import Overview from './overview'
import Activites from './activities'
import { MainStackNavigationProp } from '@navigationTypes'

interface Props {
  navigation: MainStackNavigationProp<'Tabs'>
}

const Favorites: React.FC<Props> = ({ navigation }) => {
  const { onResetAuthState } = useAuthActions()

  return (
    <Container parentContainerStyle={{ paddingBottom: 90 }}>
      <ScrollView style={{ flex: 1, flexGrow: 1 }}>
        <Overview navigation={navigation} />
        <Activites />
        <Button
          value='Sign out'
          onPress={onResetAuthState}
          buttonStyle={{ backgroundColor: colors.ui.error }}
        />
      </ScrollView>
    </Container>
  )
}

export default Favorites