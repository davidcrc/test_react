import React, { Component } from 'react';
import {  StyleSheet,  View, Text } from 'react-native';

import ArtistBox from './ArtistBox'
import {getArtists } from './api-client'

export default class ArtistDetailView extends Component {
    
    render() {
        
        const artist = this.props.artist
        
        return (
            <View style={styles.container}>
               
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
        backgroundColor: 'gray',
        // flexWrap: 'wrap',                           // cae o voltea cuando no entra en toda la pantalla
        paddingTop: 70,
    },
    titulo: {
        flexDirection: 'row',
        justifyContent: 'center',
        color: '#333',
       
    },
});