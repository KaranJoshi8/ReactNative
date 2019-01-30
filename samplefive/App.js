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
    this.state={}
    this.buttonpressed = this.buttonpressed.bind(this);
  }

  buttonpressed() {
   //const username = this._username._username._lastNativeText;
   //const password = this._password._password._lastNativeText;

    console.log(this.state.username, this.state.password);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Text}>Username</Text>
        <TextInput
          defaultValue={this.state.username}
          onChangeText={text => this.setState({ username: text })}
        />
        <Text style={styles.Text}>Password</Text>
        <TextInput
          defaultValue={this.state.password}
          onChangeText={text => this.setState({ password: text })}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: 20
          }}
        >
          <Button
            title="Sign In"
            color="#000000"
            onPress={this.buttonpressed}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    color: "white",
    padding: 50,
    backgroundColor: "#66ccff"
  },
  Text: {
    color: "white",
    fontSize: 20
  }
});
