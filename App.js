/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  FlatList
} from 'react-native';

export default class App extends Component {
    onPress(){
        Alert.alert(
            'Info',
            ':)',
            [
            //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
    }
    render() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Curso X
            </Text>
            <View style={styles.container}>
            <FlatList
            data={[
                {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
            </View>
            <Button
                onPress={this.onPress}
                title="Siguiente"
                color="#841584"
                accessibilityLabel="Siguiente Pregunta"
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});