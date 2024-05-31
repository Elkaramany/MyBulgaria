import { StyleSheet, View, Linking, ActivityIndicator, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

import { Button, Text } from '@components'
import { GoogleSVG, FacebookSVG } from '@assets'
import { colors } from '@config'


const SocialMediaAuth = () => {
    const [authUrl, setAuthUrl] = React.useState<string | null>(null);

    const handleGooglePress = () => {
        setAuthUrl('http://api.mybgr.bg:1337/connect/google');
    };

    const handleNavigationStateChange = (event: any) => {
        console.log(JSON.stringify(event), ' herere')
        if (event.url.includes('yourapp://auth')) {
            // Extract the authorization code from the URL
            const authorizationCode = event.url.split('code=')[1];
            // Use the authorization code to get tokens from your backend server
            // Handle the successful authentication here
            setAuthUrl(null);
        }
    };


    return (
        <View style={{ flex: 1 }}>
            <Button
                value='Continue with Google'
                onPress={() => setAuthUrl('http://api.mybgr.bg:1337/connect/google')}
                buttonStyle={styles.container}
                textStyle={{ color: colors.text.secondary }}
                icon={<GoogleSVG />}
            />

            <Button
                value='Continue with Facebook'
                onPress={() => setAuthUrl('http://api.mybgr.bg:1337/connect/facebook')}
                buttonStyle={styles.container}
                textStyle={{ color: colors.text.secondary }}
                icon={<FacebookSVG />}
            />

            <Modal
                visible={!!authUrl}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setAuthUrl(null)}
            >
                <TouchableOpacity style={styles.topArea} onPress={() => setAuthUrl(null)}>
                    <Text
                        value='Tap to close'
                        title lightBold
                        color={colors.text.secondary}
                    />
                </TouchableOpacity>
                <View style={styles.modalContent}>
                    <WebView
                        source={{ uri: authUrl || '' }}
                        onNavigationStateChange={handleNavigationStateChange}
                        startInLoadingState
                        userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
                        renderLoading={() => (
                            <ActivityIndicator
                                color="blue"
                                size="large"
                                style={styles.loading}
                            />
                        )}
                    />
                </View>
            </Modal>
        </View>
    )
}

export default SocialMediaAuth

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bg.quaternary
    }, loading: {
        position: 'absolute',
        top: '50%',
        left: '50%',
    }, topArea: {
        flex: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeText: {
        color: colors.text.secondary,
        fontSize: 16,
    },
    modalContent: {
        flex: 8,
        backgroundColor: 'white',
    },
})