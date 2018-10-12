/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.half1}>
          <Text style={styles.Text}>Helllo</Text>
          <Image
            style={{ width: 150, height: 150 }}
            source={{
              uri:
                "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            }}
          />
        </View>
        <View style={styles.half2}>
          <Text style={styles.Text}>world</Text>
          <Image
            style={{ width: 150, height: 150 }}
            source={{
              uri:
                "https://i.dailymail.co.uk/i/pix/2011/09/26/article-0-0BD3B45F000005DC-300_468x286.jpg"
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  half1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red"
  },
  half2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green"
  },
  Text: {
    color: "black",
    fontSize: 30
  }
});
