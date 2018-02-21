import React, { Component } from 'react';
import {  StyleSheet,  Text,  View,  Button,  Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ArtistBox extends Component {
    
    render() {
        // const image = 'https://www.billboard.com/chapiv1/images/pref_images/q11170gagv8.jpg'
        // const name = 'Bruno Mars'
        // const likes = 200
        // const comments = 140
        const { image, name, likes, comments } = this.props.artist

    return (
            
        <View style={styles.artistBox}>
        
            <Image style={styles.image} source={{uri:image }}  />

            <View style={styles.info}>
                <Text style={styles.name} > {name}</Text>
                <View style={styles.row} >
                    <View style={styles.iconContainer} >
                    
                        <Icon name="ios-heart-outline" size={30} color="lightgray" />
                        <Text style={styles.count} > {likes} </Text>
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