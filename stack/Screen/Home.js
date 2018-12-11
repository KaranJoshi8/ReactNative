import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from 'prop-types';

export default class App extends Component {
  nextscreen = () => {
    this.props.navigation.navigate("SecondRT");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Dice name="Karan" />
        <Dice name="Joshi" />
        <Dice/>
        <Text onPress={this.nextscreen} style={styles.next}>
          Go to Next Page
        </Text>
      </View>
    );
  }
}

export class Dice extends Component {
  render() {
    return (
      <View>
        <Text>Hi {this.props.name}</Text>
      </View>
    );
  }
}
Dice.propTypes = {
  name: PropTypes.string
}
Dice.defaultProps = {
  name: "Default"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
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