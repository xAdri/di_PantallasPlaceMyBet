/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View
} from 'react-native';

export class ImagenHeader extends Component {
    render() {
        return (
            <View style={styles.titulo}>
                <Image source={{ uri: 'https://i.ibb.co/cgx8yH1/logo.png' }}
                    style={{ width: 'auto', height: 100 }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titulo: {
        flexDirection: 'column',
        backgroundColor: '#009933',
        borderWidth: 15,
        borderColor: '#009933'
    }
});


