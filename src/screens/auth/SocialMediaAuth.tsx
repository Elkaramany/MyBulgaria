import React, { useState, useRef } from 'react';
import { StyleSheet, View, Modal, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { WebView } from 'react-native-webview';
import { Button, Spinner, Text } from '@components';
import { GoogleSVG, DiscordSVG } from '@assets';
import { ANDROID, colors } from '@config';
import { JWTObject } from '@request';
import useSetUserData from './useSetUserData';

const SocialMediaAuth = () => {
    const webViewRef = useRef<WebView>(null);
    const [authUrl, setAuthUrl] = useState<string | null>(null);
    const setUserData = useSetUserData();

    const fetchUserData = async (url: string) => {
        try {
            const { data }: { data: JWTObject } = await axios.get(url);
            if (data) setUserData(data);
        } catch (error) {
            Alert.alert('Authentication Error');
        } finally {
            setAuthUrl(null);
        }
    };

    const handleNavigationStateChange = (event: any) => {
        const url = event.url;
        if (url.includes(`${process.env.EXPO_PUBLIC_API_BASE}/auth/discord/callback`)) {
            fetchUserData(url);
        } else if (url.includes(`${process.env.EXPO_PUBLIC_API_BASE}/auth/google/callback`)) {
            fetchUserData(url);
        }
    };

    const handleButtonPress = (provider: 'google' | 'discord') => {
        setAuthUrl(`${process.env.EXPO_PUBLIC_API_BASE_HTTP}/connect/${provider}`);
    };

    const renderLoadingIndicator = () => <Spinner />;

    const renderButton = (provider: 'google' | 'discord', text: string, IconComponent: React.ReactNode) => (
        <Button
            value={`Continue with ${text}`}
            onPress={() => handleButtonPress(provider)}
            buttonStyle={styles.container}
            textStyle={{ color: colors.text.secondary }}
            icon={IconComponent}
        />
    );

    return (
        <View style={{ flex: 1 }}>
            {renderButton('google', 'Google', <GoogleSVG />)}
            {renderButton('discord', 'Discord', <DiscordSVG />)}

            <Modal
                visible={!!authUrl}
                transparent
                animationType="slide"
                onRequestClose={() => setAuthUrl(null)}
            >
                <TouchableOpacity style={styles.topArea} onPress={() => setAuthUrl(null)}>
                    <Text value="Tap to close" title lightBold color={colors.text.secondary} />
                </TouchableOpacity>
                <View style={styles.modalContent}>
                    <WebView
                        ref={webViewRef}
                        source={{ uri: authUrl || '' }}
                        onNavigationStateChange={handleNavigationStateChange}
                        startInLoadingState
                        userAgent={ANDROID ? 'Chrome/18.0.1025.133 Mobile Safari/535.19' : 'AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75'}
                        renderLoading={renderLoadingIndicator}
                    />
                </View>
            </Modal>
        </View>
    );
};

export default SocialMediaAuth;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bg.quaternary,
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
    modalContent: {
        flex: 8,
        backgroundColor: 'white',
    },
});
