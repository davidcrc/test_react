import React, { Component } from 'react';
import {  StyleSheet,  View, Text, ActivityIndicator, Platform } from 'react-native';

import ArtistList from './ArtistList'
import {getArtists } from './api-client'

export default class HomeView extends Component {
    // se puede iniciaalizar vacio, hasta que lluegue la data de internet
    state = {
        artists: null,     
    }

    // Cuando renderizado el componenete va a llamar a la data
    componentDidMount() {
        getArtists()
        .then( data => this.setState({ artists: data }))
    }
    
    render() {
        // const artist = {        // se creo una variable con varios objetos
        //     image: 'https://www.billboard.com/chapiv1/images/pref_images/q11170gagv8.jpg',
        //     name: 'Bruno Marss',
        //     likes: 200,
        //     comments: 140,
        // }
        // const artists = Array(2).fill(artist); 
        const artists = this.state.artists
        // console.warn('artistas ', artists)     

        // if(!artists){

        //     return (
        //         <View style={styles.container}>
        //             {/* <Text> DavisofT </Text> */}
        //             <ActivityIndicator size="large" />
        //         </View>
        //     );
        // }
        return (
            <View style={styles.container}>
                {/* <Text> DavisofT </Text> */}
                {!artists && <ActivityIndicator size="large" /> }
                { artists && <ArtistList artists={artists} /> }
                
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
        paddingTop: Platform.select({
            ios: 30,
            android: 10,
        }) ,
    },
    titulo: {
        flexDirection: 'row',
        justifyContent: 'center',
        color: '#333',
       
    },
});