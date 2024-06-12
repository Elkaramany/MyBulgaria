import { StyleSheet, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Container, Text, Button } from '@components'
import { useAuthActions } from '@redux'
import { HEIGHT, WIDTH, colors, globalStyles } from 'config'
import { BellIcon, GreyCheck } from '@assets'
import Header from './Header'
import Stats from './Stats'
import List from './List'
import { MainStackNavigationProp } from '@navigationTypes'

interface Props {
  navigation: MainStackNavigationProp<'Tabs'>
}

const Prizes: React.FC<Props> = ({ navigation }) => {
  const { onResetAuthState } = useAuthActions()

  return (
    <Container parentContainerStyle={{ paddingBottom: 90 }}>
      <Header navigation={navigation} />
      <Stats />
      <View style={{ marginVertical: 15 }}>
        <Text value='Lorem Ipsum' bold h4 color={colors.text.secondary} />
        <Text value='Lorem ipsum dolor sit amet, consec adipiscing elit.' button regular color={colors.text.tertiary} />
      </View>
      <List />
    </Container>
  )
}

export default Prizes