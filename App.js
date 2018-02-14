import React, { Component } from 'react';
import { AppRegistry, View ,Text} from 'react-native';

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} >
            <Text> Esta es la vista 1 </Text> 
        </View>
        <View style={{flex: 2, backgroundColor: 'skyblue', alignItems: 'center'}}>
            <Text> Esta es la vista 2 </Text> 
        
        </View>
        <View style={{flex: 3, backgroundColor: 'steelblue'}}>
            <Text> Esta es la vista 3 de React </Text>
        </View>
        
      </View>
    );
  }
}