import React, { Component } from 'react';
import {  StyleSheet,  Text,  View,  Button,  Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AwesomeProject extends Component {
    
    render() {
        const image = 'https://www.billboard.com/chapiv1/images/pref_images/q11170gagv8.jpg'
        const name = 'Bruno Mars'
        const likes = 200
        const comments = 140

    return (
        <View style={styles.container}>
            <View style={styles.artistBox}>
                <Image style={styles.image} source={{uri:image }}  />

                <View style={styles.info}>
                    <Text style={styles.name} > {name}</Text>
                    <View style={styles.row} >
                        <View style={styles.iconContainer} >
                        
                            <Icon name="ios-heart-outline" size={30} color="gray" />
                            <Text style={styles.count} > {likes} </Text>
                        </View>
                        
                        <View style={styles.iconContainer} >                        
                            <Icon name="ios-chatboxes-outline" size={30} color="gray" />
                            <Text style={styles.count}> {comments} </Text>
                        </View>
                        
                    </View>
                        
                </View>
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
        backgroundColor: 'lightgray',
        // flexWrap: 'wrap',                           // cae o voltea cuando no entra en toda la pantalla
        paddingTop: 3,
    },
    artistBox: {
        backgroundColor: 'white',
        flexDirection: 'row',
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
        color: 'gray',
    }
});