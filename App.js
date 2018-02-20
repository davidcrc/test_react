import React, { Component } from 'react';
import {  StyleSheet,  Text,  View,  Button,  Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ArtistBox from './ArtistBox'

export default class AwesomeProject extends Component {
    
    render() {

        const artist = {        // se creo una variable con varios objetos
            image: 'https://www.billboard.com/chapiv1/images/pref_images/q11170gagv8.jpg',
            name: 'Bruno Mars',
            likes: 200,
            comments: 140,
        }

        return (
            <View style={styles.container}>
                <Text style={styles.titulo} > DavisofT - Testing </Text>
                
                {/* La variable es pasada creando una property artist={} */}
                <ArtistBox artist={artist} />       
                <ArtistBox artist={artist} />       
                <ArtistBox artist={artist} />       
                <ArtistBox artist={artist} />       
                
            </View>
        );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',            // sobre el eje primario , sea row o column 
        // justifyContent: 'space-around',         // espaciado entre el inicio y los objetos
        // alignItems: 'center',                   // sobre el eje secundario (contrario del primario)
        backgroundColor: 'lightgray',
        // flexWrap: 'wrap',                           // cae o voltea cuando no entra en toda la pantalla
        paddingTop: 3,
    },
    titulo: {
        flexDirection: 'row',
        justifyContent: 'center',
        color: '#333',
       
    },
});