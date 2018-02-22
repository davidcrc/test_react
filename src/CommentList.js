import React, { Component } from 'react';
import {  StyleSheet, ListView } from 'react-native';

import Comment from './Comment'

export default class CommentList extends Component {

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
        this.updateDataSource(this.props.comments)
    }
    
    // ... y si cambia debemos setear para mostrar la data que llego (ya q listview muestra por partes)
    componentWillReceiveProps(newProps){
        // chekar cuando la propiedad props cambie 
        if(newProps.comments != this.props.comments){
            // console.warn('cambio la lista')
            this.updateDataSource(newProps.comments)
            
        }
    }

    updateDataSource = data => {
        this.setState ({
            // dataSource: ds.cloneWithRows(['row 1', 'row 2']),
            dataSource: this.state.dataSource.cloneWithRows(data),
        })
    }


    render() {

        return (
            <ListView
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                renderRow={(comment) => { 
                    return (
                       
                        <Comment text={comment.text} avatar={comment.userPhoto} /> 
                       
                    )
                }}
            />
           
        );
  }
}
