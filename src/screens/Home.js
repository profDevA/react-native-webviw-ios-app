import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';

const Home = () => {
    const handlePermission = async () => {
        const res = await check(PERMISSIONS.IOS.CAMERA);
        if (res === RESULTS.GRANTED) {
            console.log('Camera:', res);
        } else if (res === RESULTS.DENIED) {
            const res2 = await request(PERMISSIONS.IOS.CAMERA);
            console.log('Camera:',res2)
        }

        const res3 = await check(PERMISSIONS.IOS.MICROPHONE);
        if (res3 === RESULTS.GRANTED) {
            console.log('Micropnone:', RESULTS.GRANTED);
        } else if (res3 === RESULTS.DENIED) {
            const res4 = await request(PERMISSIONS.IOS.MICROPHONE);
            console.log('Micropnone', res4)
        }
    };

    useEffect(() => {
        handlePermission();
    }, []);

    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: 'https://mywoorld.com' }}
                style={styles.webview}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    webview: {
        marginTop: 40
    }
});

export default Home;