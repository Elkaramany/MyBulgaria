import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Container, Text } from '@components'
import { colors } from 'config'

const Favorites = () => {
  return (
    <Container>
      <Text
        value='Favorites'
        h3 lightBold color={colors.text.secondary}
      />
    </Container>
  )
}

export default Favorites

const styles = StyleSheet.create({})