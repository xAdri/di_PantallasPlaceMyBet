/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { ImagenHeader } from '../Components/ImagenHeader';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { Button } from 'react-native-elements';



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
                <View>
                    <Text style={styles.seccio3}>Mis apuestas</Text>
                </View>
                <View style={styles.partidos}>
                    {partido("Madrid", "Barcelona", "12/10/2020", "1,49€", '200€')}
                </View>
                <View style={styles.partidos}>
                    {partido("Valencia", "Levante", "13/10/2020", "1,69€", '75€')}
                </View>
                <View>
                    <Button containerStyle={styles.boton}
                        title="Atrás"
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
        borderWidth: 5
    },
    titulo: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#009933',
        borderWidth: 15,
        borderColor: '#009933'
    },
    partidos: {
        flex: 5,
        flexDirection: 'column',
        borderWidth: 15,
        borderColor: '#009933'
    },
    seccion: {
        flex: 1,
        backgroundColor: '#006622',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-around'
    },
    seccio2: {
        flex: 1,
        borderColor: 'transparent',
        borderWidth: 3,
        fontSize: 12,
        fontWeight: '600',
    },
    seccio3: {
        borderColor: 'transparent',
        backgroundColor: '#009933',
        color: 'white',
        borderWidth: 5,
        fontSize: 20,
        textAlign: 'center'
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
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    botones: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 10,
        flexDirection: 'column'
    },
    boton: {
        justifyContent: 'flex-end',
        width: '92.5%',
        alignSelf: 'center',
        margin: 5
    },
    estiloBoton: {
        backgroundColor: '#006622',
    }
});

export default App;
