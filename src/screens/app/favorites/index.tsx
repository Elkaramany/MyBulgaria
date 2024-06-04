import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Container, Text } from '@components'
import { colors } from 'config'

const Favorites = () => {
  return (
    <Container>
      <View style={{ height: 200, backgroundColor: 'red' }} />
      <Text
        value='Favorites'
        h1 bold color={colors.text.secondary}
      />
    </Container>
  )
}

export default Favorites

const styles = StyleSheet.create({})