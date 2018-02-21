import React, { Component } from 'react';
import {  StyleSheet,  View, Text, TextInput, Button, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

// import FSDK, { LoginButton,  AccessToken } from 'react-native-fbsdk';


export default class LoginView extends Component {
    constructor(props) {

        super(props)
    
        this.state = {
    
          TextInputValueHolder: ' - Deberia haber un login con facebook! - '
    
        }
    
      }
    handlePress = () => {
    const { TextInputValueHolder }  = this.state ;
    
        Alert.alert('Bienvenido '+TextInputValueHolder)
    
        Actions.home()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Bienvenidos al Projecto Awesome</Text>
                
                <TextInput style={styles.medio}
                    placeholder="nombre"
                    onChangeText={TextInputValueHolder => this.setState({TextInputValueHolder})}
                    style={{textAlign: 'center', marginBottom: 7, height: 50}}
                />
 
                <Button
                    onPress={ this.handlePress}
                    title="Login con facebook"
                    />
            </View>
            
        );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
        justifyContent: 'center',            // sobre el eje primario , sea row o column 
        // justifyContent: 'space-around',         // espaciado entre el inicio y los objetos
        alignItems: 'center',                   // sobre el eje secundario (contrario del primario)
        backgroundColor: 'lightgray',
        // flexWrap: 'wrap',                           // cae o voltea cuando no entra en toda la pantalla
        // paddingTop: 5,
        // margin: 10,
    },
    welcome: {
        fontSize:4 ,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    medio: {
        flex: 1,
        alignItems: 'stretch'
    }
});