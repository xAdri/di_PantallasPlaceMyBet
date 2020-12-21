/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useState } from 'react';
import { ImagenHeader } from '../Components/ImagenHeader';
import { InformesComponent } from '../Components/InformesComponent';
import { Input, Button } from 'react-native-elements';
import {
    StyleSheet,
    ScrollView,
    View,
    Text
} from 'react-native';

const partido = (equipo1, equipo2, fecha, cuota, dinero) => {
    return (
        <View style={styles.seccion}>
            <View>
                <Text style={styles.seccio4}>{equipo1} VS {equipo2}</Text>
                <View style={styles.seccion}>
                    <Text style={styles.seccio4}>{fecha}</Text>
                    <Text style={[styles.seccio4, styles.shadow]}>{cuota}</Text>
                    <Text style={styles.seccio4}>Over</Text>
                </View>
                <View style={styles.seccion}>
                    <Text style={styles.seccio4}>Dinero apostado:</Text>
                    <Text style={styles.seccio4}>{dinero}</Text>
                </View>
            </View>
        </View>
    )
}

class App extends Component {
    render() {
        return (
            <View style={styles.fondo}>
                <ImagenHeader />
                <ScrollView>
                    <View style={styles.fondo}>
                        <Text style={{ fontSize: 20, color: "white" }}>  Informes disponibles:</Text>
                        <View>
                            <InformesComponent />
                        </View>
                        <Text style={{ fontSize: 20, color: "white" }}>  Informe de Fechas de usuario</Text>
                        <Input style={styles.input}
                            placeholder='Nombre Completo'
                            placeholderTextColor="white"
                        />
                        <Input style={styles.input}
                            placeholder='Fecha de nacimiento'
                            placeholderTextColor="white"
                        />
                        <Input style={styles.input}
                            placeholder='Email usuario'
                            placeholderTextColor="white"
                        />
                        <Text style={{ fontSize: 20, color: "white" }}>  Partidos:</Text>
                    </View>
                    <View style={styles.partidos}>
                        {partido("Madrid", "Barcelona", "12/10/2020", "1,49€", '200€')}
                    </View>
                </ScrollView>
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
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    input: {
        fontSize: 15,
        color: "white",
        width: 1,
        height: 1
    },
    seccion: {
        flex: 1,
        backgroundColor: '#006622',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-around'
    },
    seccio4: {
        borderColor: 'transparent',
        backgroundColor: '#009933',
        color: 'white',
        borderWidth: 5,
        fontSize: 20,
        margin: 5,
        textAlign: 'center',
    },
    partidos: {
        flex: 6,
        flexDirection: 'column',
        borderWidth: 15,
        borderColor: '#009933'
    }
});

export default App;