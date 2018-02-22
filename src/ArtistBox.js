import React, { Component } from 'react';
import {  StyleSheet,  Text,  View,  Button,  Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { firebaseDatabase, firebaseAuth } from './firebase'


export default class ArtistBox extends Component {
    state = {
        liked: false
    }

    // escucha de la BD , antes q el componenete sea montado
    componentWillMount() {          // value: cuando cambie el valor se cheka su value

        const { uid } = 'ygPy9LMNodbvtwlm9PWpkIl6AdF3'
        
        this.getArtistRef().on('value', snapshot => {
            const artist = snapshot.val()
            if (artist){
                this.setState({
                    likeCount: artist.likeCount,
                    liked: artist.likes && artist.likes[uid]
                })
            }
        })
    }

    handlePress = () => {
       
        // this.setState({liked: !this.state.liked })
        this.toggleLike(!this.state.liked)
    }

    getArtistRef = (liked) => {
        const {id} = this.props.artist

        return firebaseDatabase.ref(`artist/${id}`)
    }

    toggleLike = () => {
        // const { uid } = firebaseAuth.currentUser
        const { uid } = 'ygPy9LMNodbvtwlm9PWpkIl6AdF3'

        this.getArtistRef().transaction(function(artist) {
            if (artist) {
            if (artist.likes && artist.likes[uid]) {
                artist.likeCount--;
                artist.likes[uid] = null;
            } else {
                artist.likeCount++;
                if (!artist.likes) {
                artist.likes = {};
                }
                artist.likes[uid] = true;
            }
            }
            return artist || {
                likeCount: 1,
                likes: {
                    [uid]: true,
                }
            } ;
        });

    }

    render() {
        // const image = 'https://www.billboard.com/chapiv1/images/pref_images/q11170gagv8.jpg'
        // const name = 'Bruno Mars'
        // const likes = 200
        // const comments = 140
        const { image, name, likes, comments } = this.props.artist
                            
        const likeIcon = this.state.liked? 
            <Icon name="ios-heart" size={30} color="#e74c3c" /> :
            <Icon name="ios-heart-outline" size={30} color="lightgray" />

        const {likeCount} = this. state
    return (
            
        <View style={styles.artistBox}>
        
            <Image style={styles.image} source={{uri:image }}  />

            <View style={styles.info}>
                <Text style={styles.name} > {name}</Text>
                <View style={styles.row} >
                    <View style={styles.iconContainer} >
                        
                        <TouchableOpacity onPress={this.handlePress} > 
                            {likeIcon}
                        </TouchableOpacity >                         
                        
                        <Text style={styles.count} > {likeCount} </Text>
                    </View>
                    
                    <View style={styles.iconContainer} >                        
                        <Icon name="ios-chatboxes-outline" size={30} color="lightgray" />
                        <Text style={styles.count}> {comments} </Text>
                    </View>
                    
                </View>
                    
            </View>
        </View>
        
    );
  }
}

const styles = StyleSheet.create({
    artistBox: {
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: 'black',
        // shadowOpacity: .2,
        // shadowOffset: {
        //     height: 1,
        //     width: -2,
        // },
        elevation: 6,
        paddingTop: 5,
        
    },

    image: {
        width: 150,
        height: 150,
    },
    info: {
        // backgroundColor: 'blue',
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    name: {
        marginTop: 10,
        color: '#333',
    },
    row: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginTop: 15,
    },
    iconContainer: {
        flex:1,
        alignItems: 'center',
    },
    count: {
        color: 'lightgray',
    }
});