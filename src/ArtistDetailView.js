import React, { Component } from 'react';
import {  StyleSheet,  View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { firebaseDatabase, firebaseAuth } from './firebase'

import ArtistBox from './ArtistBox'
import CommentList from './CommentList'
import {getArtists } from './api-client'

export default class ArtistDetailView extends Component {

    state = {
        comments: []
    }

    componentDidMount() {
        this.getArtistCommentRef().on('child_added', this.addComment);
    }

    componentWillUnmount() {
        this.getArtistCommentRef().off('child_added', this.addComment);  
    }

    addComment = (data) => {
        const comment = data.val()
        this.setState({
            comments: this.state.comments.concat(comment)
        })
    }


    // se añade a la BD
    handleSend = () => {
        // console.warn('enviar...', this.state.text)
        const { uid, photoURL } = 'v6r6VePvowYId3Vp7LyDFXTxTys2'
        // const { uid } = 'v6r6VePvowYId3Vp7LyDFXTxTys2'

        const {text} = this.state
        const artistCommentRef = this.getArtistCommentRef()
        var newCommentRef = artistCommentRef.push();
        newCommentRef.set({ 
            text,
            // userPhoto: photoURL,
            userPhoto: 'http://themes.gohugo.io/theme/hugo-geo/img/profile.png',
            // uid,
            uid: 'v6r6VePvowYId3Vp7LyDFXTxTys2' ,
        });

        // vaciar la caja
        this.setState({text: '' })
    }
    
    getArtistCommentRef = () => {
        const {id} = this.props.artist

        return firebaseDatabase.ref(`comments/${id}`)
    }

    handleChangeText = (text) => this.setState({text})
    
    render() {
        
        const artist = this.props.artist
        const { comments } = this.state

        return (
            <View style={styles.container}>
               
                <ArtistBox artist={artist} />
                <Text style={styles.header} > Comentarios : </Text>
                <CommentList comments={comments} />

                <View style = {styles.inputContainer}>
                    <TextInput
                        // style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        style = {styles.input}
                        placeholder="Envianos  un comentario!"
                        onChangeText={this.handleChangeText}
                        value={this.state.text}
                    />
                    <TouchableOpacity onPress={this.handleSend} > 
                        <Icon name="ios-play" size={30} color="gray" />
                    </TouchableOpacity >
                </View>
                
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
    input: {
        // height: 50,
        // backgroundColor: 'gray',
        flex: 1,
    },
    inputContainer: {
        // position: 'absolute',
        // bottom: 0,
        // right: 0,
        // left: 0,
        height: 50,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        flexDirection: 'row',        
        alignItems: 'center',
    },
    header: {
        fontSize: 20,
        paddingHorizontal: 15,
        marginVertical: 10,
    }
});