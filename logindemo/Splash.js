import React, { Component } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export default class Splash extends Component {

    // this method call after render so move to next page
    componentDidMount() { 
        this.props.navigation.replace('home');
    }

    render() {
        return (
            <ImageBackground
                source={require("../logindemo/assets/splash.jpg")}
                style={styles.photo}
            >
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    photo: {
        flex: 1,
        width: 200 ,
        height: 200,
        resizeMode: 'cover',
        // opacity: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    }
});