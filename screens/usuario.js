/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useState } from 'react';
import { ImagenHeader } from '../Components/ImagenHeader';
import { Input, Button } from 'react-native-elements';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    text
} from 'react-native';

class usuario extends Component {
    render() {
        return (
            <View style={styles.fondo}>
                <ImagenHeader />
                <View style={styles.botones}>
                    <Button containerStyle={styles.boton}
                        title="Informes"
                        buttonStyle={styles.estiloBoton}
                    />
                    <Button containerStyle={styles.boton}
                        title="Partidos"
                        buttonStyle={styles.estiloBoton}

                    />
                    <Button containerStyle={styles.boton}
                        title="Historial de apuestas"
                        buttonStyle={styles.estiloBoton}
                    />
                    <Button containerStyle={styles.boton}
                        title="Configuracion"
                        buttonStyle={styles.estiloBoton}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#009933',
        //borderWidth: 5,
    },
    botones: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 10,
        flexDirection: 'column'
    },
    boton: {
        justifyContent: 'flex-end',
        width: '75%',
        alignSelf: 'center',
        margin: 5
    },
    estiloBoton: {
        backgroundColor: '#006622',
    }
});

export default usuario;