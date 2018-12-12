import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground
} from "react-native";

export default class App extends Component {
  nextscreen = () => {
    this.props.navigation.navigate("SecondRT");
  };
  regscreen = () => {
    this.props.navigation.navigate("RegRT");
  };

  constructor(props) {
    super(props);
    this.state = {
      fname: ""
    };
  }

  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://i.pinimg.com/736x/f9/37/0b/f9370b54d6911ce79b68d490eefc1f3c--blue-wallpapers-iphone--wallpaper.jpg"
        }}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Dice name="Karan" />
          <Dice name="Joshi" />
          <Dice />

          <TextInput
            style={styles.inputs}
            onChangeText={txt => this.setState({ fname: txt })}
            placeholder="Type the first name"
            value={this.state.fname}
          />
          <Text>{this.state.fname}</Text>
          <Text onPress={this.nextscreen} style={styles.next}>
            Go to Next Page>
          </Text>

          <Text onPress={this.regscreen} style={styles.next}>
            Go to Registration Page>
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

export class Dice extends Component {
  render() {
    return (
      <View >
        <Text style={styles.dice}>Hi {this.props.name}</Text>
      </View>
    );
  }
}
Dice.defaultProps = {
  name: "Default"
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff"
  },
  next: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    color: "#fff"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#fff"
  },
  dice: {
    color: "#00FF00"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    color: "#fff"
  },
  inputs: {
    backgroundColor: "#fff",
    width: "90%",
    height: "10%",
    fontSize: 20
  }
});
