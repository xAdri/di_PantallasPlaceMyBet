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
                <View style={styles.fondo}>
                    <Text style={styles.textos20}>  Informes disponibles:</Text>
                    <View>
                        <InformesComponent />
                    </View>
                    <Text style={styles.textos20}>  Informe de Mercados</Text>
                    <View style={styles.row}>
                        <Text style={styles.textos20}>  Over/Under:</Text>
                        <Button containerStyle={styles.boton}
                            title="Over"
                            buttonStyle={styles.estiloBoton}
                        />
                    </View>
                    <Text style={styles.textos20}>  ID mercado:</Text>
                    <View style={styles.row}>
                        <Button containerStyle={styles.botonId}
                            title="1.5"
                            buttonStyle={styles.estiloBoton}
                        />
                        <Button containerStyle={styles.botonId}
                            title="2.5"
                            buttonStyle={styles.estiloBoton}
                        />
                        <Button containerStyle={styles.botonId}
                            title="3.5"
                            buttonStyle={styles.estiloBoton}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#009933'
    },
    textos: {
        flex: 0.5,
        flexDirection: 'column'
    },
    boton: {
        justifyContent: 'flex-end',
        width: '60%',
        alignSelf: 'center',
        margin: 5
    },
    botonId: {
        justifyContent: 'flex-end',
        width: '30%',
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
    },
    textos15: {
        fontSize: 15,
        color: "white"
    },
    textos20: {
        fontSize: 20,
        color: "white"
    }
});

export default App;