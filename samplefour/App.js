/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

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
        <Text>Username</Text>
        <TextInput onChangeText={this.handleusernamechanges} />

        <Text>Password</Text>
        <TextInput onChangeText={this.handlepasswordchanges} />

        <Button
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "green"
  }
});
