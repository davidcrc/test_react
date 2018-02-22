import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';

const DEFAULT_AVATAR = 'https://image.flaticon.com/icons/png/128/149/149452.png'
const AVATAR_SIZE = 28

const Comment = (props) => 
<View style={styles.comment}>
    {
        props.avatar ?
            <Image style={styles.avatar} source={{ uri: props.avatar }} /> :
            <Image style={styles.avatar} source={{ uri: DEFAULT_AVATAR }} />
            
        
    }
    
    <Text> {props.text} </Text>
</View>

const styles = StyleSheet.create({
    comment: {
        backgroundColor: '#ecf0f1',
        padding: 10,
        margin: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 10,
        fontSize: 16,
    },
    avatar: {
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        borderRadius: AVATAR_SIZE / 2,
        
    }
} )

export default Comment