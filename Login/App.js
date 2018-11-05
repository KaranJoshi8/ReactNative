/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, ImageBackground, View, TextInput } from "react-native";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";

export default class App extends Component {
  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg"
        }}
        style={styles.backgroundImage}
      >
        <View style={styles.wrapper}>
          <TextInput style={styles.inputstyle} placeholder="Username" />
          <TextInput style={styles.inputstyle} placeholder="Password" />
          <AwesomeButtonRick type="secondary" progress style={styles.btnstyle}>
            Login
          </AwesomeButtonRick>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  inputstyle: {
    backgroundColor: "#fff",
    width: "90%",
    marginBottom: 15,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    paddingLeft: 20
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover"
  },
  btnstyle: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  wrapper: {
    backgroundColor: "#000",
    opacity: 0.7,
    width: "70%",
    marginBottom: 15,
    marginStart: 50,
    alignItems: "center",
    justifyContent: "center"
  }
});
