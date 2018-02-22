import React, { Component } from 'react';
import {  StyleSheet,  View, Text, TextInput, Button, Alert, Image, ImageBackground } from 'react-native';
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
            <ImageBackground source={require('./imgs/background.jpg') } style={styles.container}>

                <Text style={styles.welcome} > Bienvenidos al Projecto Awesome</Text>
                <Image source={require('./imgs/logo.png')} style={styles.logo} />
                
                <TextInput style={styles.medio}
                    placeholder="nombre"
                    onChangeText={TextInputValueHolder => this.setState({TextInputValueHolder})}
                    style={{textAlign: 'center', marginBottom: 7, height: 50}}
                />
 
                <Button
                    onPress={ this.handlePress}
                    title="Login con facebook"
                />
            </ImageBackground>
            
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
        width: null,
        height: null,
    },
    welcome: {
        fontSize: 18 ,
        fontWeight: '600',
        marginBottom: 20,
        backgroundColor: 'transparent',
        color: 'white',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 15,
    },
    medio: {
        flex: 2,
        alignItems: 'stretch'
    }
});