import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dice } from "./Home";

export default class App extends Component {
  thirdscreen = () => {
    this.props.navigation.navigate("ContactRT");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text o style={styles.welcome}>
          Welcome to Second Activity
        </Text>
        <Text onPress={this.thirdscreen} style={styles.next}>
          Go to Next Page
        </Text>
        <Dice />
      </View>
    );
  }
}
Dice.defaultProps = {
  name: "Second"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  next: {
    fontSize: 30,
    textAlign: "center",
    margin: 10
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
