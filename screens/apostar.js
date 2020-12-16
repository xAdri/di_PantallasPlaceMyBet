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
import {CheckBox} from 'react-native-elements';


const partido = (equipo1, equipo2, fecha, hora) => {
    return (
        <View style={styles.seccion}>
            <View>
                <Text style={styles.seccio4}>{equipo1} VS {equipo2}</Text>
                <Text style={styles.seccio4}>{fecha}</Text>
                <Text style={styles.seccio4}>{hora}</Text>
            </View>
        </View>
    )
}

/*
<Text style={styles.equipos}>             15:00            </Text>
                                    <Text style={styles.equipos}>       Cuota Under      </Text>
                                    <Text style={styles.equipos}>            2,23€             </Text>
                                    <Text style={styles.equipos}>           UNDER             </Text>
                                    <Text style={styles.equipos}>             1.5                </Text>
                                    <Text style={styles.equipos}>             2.5                </Text>
                                    <Text style={styles.equipos}>             3.5                </Text>
*/

class App extends Component {
    render() {
        return (
            <View style={styles.fondo}>
                <ImagenHeader />
                <View style={styles.apuesta}>
                    <View style={styles.seccion}>
                        <View style={styles.seccio2}>
                            <View>
                                <Text style={styles.equipos}>Valencia VS Levante</Text>
                                <View style={styles.containerLeft}>
                                    <Text style={styles.equipos}>        12/10/2020         </Text>
                                    <Text style={styles.equipos}>        Cuota Over          </Text>
                                    <Text style={styles.equipos}>               1,49€             </Text>
                                    <Text style={styles.equipos}>              OVER            </Text>
                                    <Text style={styles.equipos}>                1.5              </Text>
                                    <Text style={styles.equipos}>                2.5              </Text>
                                    <Text style={styles.equipos}>                3.5              </Text>
                                </View>
                                <View style={styles.containerRight}>
                                    <Text style={styles.equipos}>             15:00            </Text>
                                    <Text style={styles.equipos}>       Cuota Under      </Text>
                                    <Text style={styles.equipos}>            2,23€             </Text>
                                    <Text style={styles.equipos}>           UNDER             </Text>
                                    <Text style={styles.equipos}>             1.5                </Text>
                                    <Text style={styles.equipos}>             2.5                </Text>
                                    <Text style={styles.equipos}>             3.5                </Text>
                                    
                                </View>
                            </View>
                        </View>
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
    titulo: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#009933',
        borderWidth: 15,
        borderColor: '#009933'
    },
    apuesta: {
        flex: 6,
        flexDirection: 'column',
        borderWidth: 15,
        borderColor: '#009933'
    },
    seccion: {
        flex: 1,
        backgroundColor: '#006622',
        flexDirection: "row"
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
    fechaHora: {
        marginTop: '30%'
    },
    containerLeft: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        alignSelf: 'center'
    },
    containerRight: {
        flex: 1,
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        alignItems: 'flex-end'
    },
    item: {
        width: '50%' // is 50% of container width
    }
});

export default App;
