import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.props.increment}
          title="Increase Count"
          //   color="green"
          style={[styles.touchable, { backgroundColor: "green" }]}
          //   accessibilityLabel=""
        >
          <Text style={{ color: "#fff" }}>Increase Count</Text>
        </TouchableOpacity>

        <View style={styles.textinput}>
          <Text style={{ fontSize: 15 }}>{this.props.count}</Text>
        </View>

        <TouchableOpacity
          onPress={this.props.decrement}
          title="Decrease Count"
          //   color="red"

          style={[styles.touchable, { backgroundColor: "red" }]}
          //   accessibilityLabel=""
        >
          <Text style={{ color: "#fff" }}>Decrease Count</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00bfff"
  },
  textinput: {
    justifyContent: "center",
    backgroundColor: "#fff",
    elevation: 10,
    height: "10%",
    width: "30%",
    alignItems: "center",
    borderRadius: 25,
    opacity: 0.8,
    color: "#fff",
    margin: 30
  },
  touchable: {
    borderRadius: 25,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: 40
  }
});
