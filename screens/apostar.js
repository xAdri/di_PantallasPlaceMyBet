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
//import { RadioButton } from 'react-native-paper';
import { BoolComponent } from '../Components/BoolComponent';
import { Input, Button } from 'react-native-elements';

class App extends Component {
    render() {
        return (
            <View style={styles.fondo}>
                <ImagenHeader />
                <View style={styles.apuesta}>
                    <View style={styles.seccion}>
                        <View>
                            <Text style={styles.equipos}>Valencia VS Levante</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.equipos}>12/10/2020</Text>
                            <Text style={styles.equipos}>13:00h</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.equipos}>Cuota Over</Text>
                            <Text style={styles.equipos}>Cuota Under</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={[styles.equipos, styles.shadow]}>1,49€</Text>
                            <Text style={[styles.equipos, styles.shadow]}>2,23€</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.equipos}>Over</Text>
                            <Text style={styles.equipos}>Under</Text>
                        </View>
                        <BoolComponent />
                        <View style={styles.botones}>
                            <Button containerStyle={styles.boton}
                                title="Realizar apuesta"
                                buttonStyle={styles.estiloBoton}
                            />
                        </View>
                    </View>
                </View>
            </View >
        );
    }
}


const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#009933'
    },
    apuesta: {
        flex: 6,
        flexDirection: 'column',
        borderWidth: 15,
        borderColor: '#009933'
    },
    seccion: {
        flex: 1,
        backgroundColor: '#006622'
    },
    equipos: {
        borderColor: 'transparent',
        backgroundColor: '#009933',
        color: 'white',
        borderWidth: 5,
        fontSize: 20,
        margin: 5,
        textAlign: 'center',
        justifyContent: 'flex-end'
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    botones: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 10,
        flexDirection: 'column'
    },
    boton: {
        justifyContent: 'flex-end',
        width: '95%',
        alignSelf: 'center',
        margin: 5
    },
    estiloBoton: {
        backgroundColor: '#009933',
    }

});

export default App;
