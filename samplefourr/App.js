/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button,Animated } from "react-native";

export default class App extends Component {
  constructor() {
    super();

    this.handlepasswordchanges = this.handlepasswordchanges.bind(this);
  }

  handleusernamechanges(newText) {
    console.log(`Username is ${newText}`);
  }

  handlepasswordchanges(newText) {
    console.log(`Password is ${newText}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Text}>Username</Text>
        <TextInput onChangeText={this.handleusernamechanges} />

        <Text style={styles.Text}>Password</Text>
        <TextInput onChangeText={this.handlepasswordchanges} />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: 20
          }}
        >
          <Button title="Sign In" color="#000000" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    color:"white",
    padding: 50,
    backgroundColor: "#0066ff"
  },
  Text: {
    color: "white",
    fontSize: 20
  }
});
