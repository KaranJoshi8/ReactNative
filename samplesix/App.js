/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {Button,StyleSheet, View, Text } from "react-native";


export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.result} />
        <View style={styles.calculation} />
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
			<Text>Hello</Text>
			
            </View>
            <View style={styles.row}>
			</View>
            <View style={styles.row}>
			</View>
            <View style={styles.row}>
			</View>
          </View>
          <View style={styles.operations} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  result: {
    flex: 1,
    backgroundColor: "red"
  },
  row: {
    flexDirection: "row"
  },
  calculation: {
    flex: 1,
    backgroundColor: "green"
  },
  buttons: {
    flexGrow: 7,
    flexDirection: "row"
  },
  numbers: {
    flex: 3,
    backgroundColor: "yellow"
  },
  operations: {
    flex: 1,
    backgroundColor: "black"
  }
});
