import React, { Component } from 'react';
import {  StyleSheet, ListView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import ArtistBox from './ArtistBox'

export default class AwesomeProject extends Component {

    // Se construye primero con una lista vacia ...
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds
        };
        // this.updateDataSource(props.artists)
    }
    
    // Cuando es renderizado todo el componenete va a llamar a la data    
    componentDidMount() {
        this.updateDataSource(this.props.artists)
    }
    
    // ... y si cambia debemos setear para mostrar la data que llego (ya q listview muestra por partes)
    componentWillReceiveProps(newProps){
        // chekar cuando la propiedad props cambie 
        if(newProps.artists != this.props.artists){
            // console.warn('cambio la lista')
            this.updateDataSource(newProps.artists)
            
        }
    }

    updateDataSource = data => {
        this.setState ({
            // dataSource: ds.cloneWithRows(['row 1', 'row 2']),
            dataSource: this.state.dataSource.cloneWithRows(data),
        })
    }

    // Maneja al artista clicado, para abrir una vista de detalle
    handlePress(artist) {
        // console.warn('artista pe', artist)
        Actions.artistDetail( {artist})
    }

    render() {

        return (
            <ListView
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                renderRow={(artist) => { 
                    return (
                        // TouchableOpacity , le da la capacidad de volverse opaco al clicar
                        // onPress , le da un link con la variable del artista clicado -> Con () => mejor para q una funcion lo llame solo al clicar 
                        <TouchableOpacity onPress={() => this.handlePress(artist) } > 
                        <ArtistBox artist={artist} /> 
                        </TouchableOpacity > 
                    )
                }}
            />
           
        );
  }
}
