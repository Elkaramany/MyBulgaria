import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container } from '@components'
import { HomeIcon, PrizeIcon } from '@assets'

const Home = () => {
    return (
        <Container >
            <Text>Home</Text>
            <PrizeIcon fill={'blue'} />
        </Container>
    )
}

export default Home

const styles = StyleSheet.create({})