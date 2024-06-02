import { StyleSheet, View, ActivityIndicator, Modal, TouchableOpacity } from 'react-native';
import React from 'react';
import axios from 'axios';
import { WebView } from 'react-native-webview';
import { Button, Text } from '@components';
import { GoogleSVG, DiscordSVG } from '@assets';
import { colors } from '@config';
import { useAuthActions } from '@redux';

const SocialMediaAuth = () => {
    const webViewRef = React.useRef<WebView>(null);
    const { setId, setEmail, setName } = useAuthActions()
    const [authUrl, setAuthUrl] = React.useState<string | null>(null);

    const handleNavigationStateChange = (event: any) => {
        if (event.url.includes('api.mybgr.bg/auth/discord/callback')) {
            const urlParams = new URLSearchParams(event.url.split('?')[1]);
            const accessToken = urlParams.get('access_token');

            axios
                .get(
                    `https://discordapp.com/api/users/@me`,
                    { headers: { Authorization: `Bearer ${accessToken}` } }
                ).then((user) => {
                    setId(user.data.id)
                    setName(user.data.username)
                    setEmail(user.data.email)
                }).catch((e) => console.log('error  ', e))
        } else if (event.url.includes('api.mybgr.bg/auth/google/callback')) {
            const urlParams = new URLSearchParams(event.url.split('?')[1]);
            console.log(urlParams, ' google params')
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
                value='Continue with Discord'
                onPress={() => setAuthUrl('http://api.mybgr.bg:1337/connect/discord')}
                buttonStyle={styles.container}
                textStyle={{ color: colors.text.secondary }}
                icon={<DiscordSVG />}
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
                        ref={webViewRef}
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
    );
};

export default SocialMediaAuth;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bg.quaternary
    },
    loading: {
        position: 'absolute',
        top: '50%',
        left: '50%',
    },
    topArea: {
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
    infoContainer: {
        padding: 20,
        backgroundColor: colors.bg.secondary,
        borderRadius: 10,
        marginTop: 20,
    }
});
