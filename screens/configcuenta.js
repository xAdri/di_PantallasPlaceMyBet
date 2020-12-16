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
    ScrollView,
    View,
    Text
} from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={styles.fondo}>
                <ImagenHeader />
                <ScrollView>
                    <View style={styles.fondo}>
                        <Text style={{ fontSize: 25, color: "white", alignSelf: "center" }}>Actualizar datos de la cuenta</Text>
                        <Text style={{ fontSize: 25, color: "white", alignSelf: "center" }}> </Text>
                        <Text style={{ fontSize: 20, color: "white" }}>  Datos personales</Text>

                        <Input style={{ fontSize: 15, color: "white" }}
                            placeholder='Nombre Completo'
                            placeholderTextColor="white"
                        />
                        <Input style={{ fontSize: 15, color: "white" }}
                            placeholder='Contraseña'
                            placeholderTextColor="white"
                        />
                    </View>
                    <Text style={{ fontSize: 20, color: "white" }}>  Datos Bancarios</Text>
                    <Input style={{ fontSize: 15, color: "white" }}
                        placeholder='Nombre del titular'
                        placeholderTextColor="white"
                    />
                    <Input style={{ fontSize: 15, color: "white" }}
                        placeholder='Numero de tarjeta'
                        placeholderTextColor="white"
                    />

                </ScrollView>
                <Button containerStyle={styles.boton}
                    title="Atrás"
                    buttonStyle={styles.estiloBoton}
                />
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
    textos: {
        flex: 0.5,
        flexDirection: 'column'
    },
    boton: {
        justifyContent: 'flex-end',
        width: '90%',
        alignSelf: 'center',
        margin: 5
    },
    estiloBoton: {
        backgroundColor: '#006622',
    }
});

export default App;