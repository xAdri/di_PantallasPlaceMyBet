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
import { CheckBox } from 'react-native-elements';


export class InformesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: false }
    };
    render() {
        return (
            <View>
                <View style={styles.titulo}>
                    <CheckBox
                        title="Fechas"
                        checked={this.state.checked}
                        onPress={() => this.setState({ checked: !this.state.checked })}
                    />
                </View>
                <View style={styles.titulo}>
                    <CheckBox
                        title="Cuotas"
                        checked={this.state.checked}
                        onPress={() => this.setState({ checked: !this.state.checked })}
                    />
                </View>
                <View style={styles.titulo}>
                    <CheckBox
                        title="Mercado"
                        checked={this.state.checked}
                        onPress={() => this.setState({ checked: !this.state.checked })}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titulo: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});
