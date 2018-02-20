import React, { Component } from 'react';
import {  StyleSheet,  Text,  View,  Button,  Alert} from 'react-native';

export default class AwesomeProject extends Component {
    
    render() {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.red]} />
            <View style={[styles.box, styles.green]} />
            <View style={[styles.box, styles.blue]} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',            // sobre el eje primario , sea row o column 
        // justifyContent: 'space-around',         // espaciado entre el inicio y los objetos
        // alignItems: 'center',                   // sobre el eje secundario (contrario del primario)
        backgroundColor: '#F5FCFF',
        flexWrap: 'wrap',                           // cae o voltea cuando no entra en toda la pantalla
    },
    box: {
        width: 200,
        height: 200,
        backgroundColor: 'black'
    },

    red: {
        backgroundColor: 'red',
        // flex: 2,
        // alignSelf: 'flex-end'  // alinea abajo o arriba
    },

    green: {
        // flex: 1,       
        backgroundColor: 'green'
    },

    blue: {
        backgroundColor: 'blue'
    },
});