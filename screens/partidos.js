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


class App extends Component {
  render() {
    return (
      <View style={styles.fondo}>
        <ImagenHeader />
        <View style={styles.partidos}>
          {partido("Madrid", "Barcelona", "12/10/2020", "21:00")}
          {partido("Valencia", "Levante", "13/10/2020", "13:00")}
          {partido("Getafe", "Sevilla", "14/10/2020", "22:00")}
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
    flex: 6,
    flexDirection: 'column',
    borderWidth: 15,
    borderColor: '#009933'
  },
  seccion: {
    flex: 1,
    borderWidth: 5,
    backgroundColor: '#006622',

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
    justifyContent: 'flex-end'
  },
  fechaHora: {
    marginTop: '30%'
  }
});

export default App;
