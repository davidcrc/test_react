import React, { Component } from 'react';
import {  StyleSheet,  View, Text, Platform, } from 'react-native';
import {  Scene, Router, Stack  } from 'react-native-router-flux';

import HomeView from './HomeView';
import ArtistDetailView from './ArtistDetailView';
import LoginView from './LoginView';

export default class AwesomeProject extends Component {
    render() {
        // const isAndroid = Platform.OS === 'android'

        return (
        <Router>
            
            <Scene key="root">
                <Scene key="login" component={LoginView} hideNavBar />
                {/* <Scene key="login" component={Login} title="Login"/> */}
                {/* <Scene key="register" component={Register} title="Register"/> */}
                <Scene key="home" component={HomeView} hideNavBar />
                <Scene key="artistDetail" component={ArtistDetailView}  title="Comentarios" /*hideNavBar={isAndroid}*/ />
            </Scene>
        </Router>
      );
    }
}