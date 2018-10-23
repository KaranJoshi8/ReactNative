/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import EventList from "./EventList";
import EventFormm from "./EventFormm";
import { YellowBox } from "react-native";
import { StackNavigator } from "react-navigation";

YellowBox.ignoreWarnings([
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillRecieveProps is deprecated"
]);

export default StackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: "Your Events"
    })
  },
  form: {
    screen: EventFormm,
    navigationOptions: () => ({
      title: "Add an Event"
    })
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
