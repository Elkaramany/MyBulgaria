import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Container } from '@components'
import { resetAuthState } from '@redux'
import { colors } from '@config'

const Profile = () => {
  return (
    <Container>
      <Button
        value='Sign out'
        onPress={() => resetAuthState()}
        buttonStyle={{ backgroundColor: colors.ui.error }}
      />
    </Container>
  )
}

export default Profile

const styles = StyleSheet.create({})