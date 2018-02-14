import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    let pic = {
        uri: 'http://lorempixel.com/300/300?1'
      };
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Greeting name='Jaina' />
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Greeting name='Valeera' />
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}