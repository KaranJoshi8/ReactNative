import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  ImageBackground,
  valid
} from "react-native";
import { StackNavigator } from "react-navigation";

export default class Contact extends React.Component {
  static navigationOption = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      msg: "Enter The Message",
      name: "Enter the Name",

      output: "Thank you for the contact",
      email: "",
      validated: false
    };
  }

  clearFields = () => this.setState({ name: "", msg: "", email: "" });

  sendMessage = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(this.state.email) === true) {
      Alert.alert(this.state.name, this.state.output);
      this.props.navigation.goBack();
    } else {
      alert();
    }
  };

  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg"
        }}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Text style={styles.heading}>Contact Us</Text>
          <TextInput
            style={styles.inputs}
            onChangeText={text => this.setState({ name: text })}
            value={this.state.name}
          />
          <Text>{this.state.name}</Text>
          <TextInput
            style={styles.multiInput}
            onChangeText={text => this.setState({ msg: text })}
            value={this.state.msg}
            multiline={true}
            numberOfLines={4}
          />
          <TextInput
            style={styles.inputs}
            autoCapitalize="none"
            onChangeText={text => this.setState({ email: text })}
            value={this.setState.email}
          />
          <View style={styles.btnview}>
            <TouchableHighlight onPress={this.sendMessage} underlayColor="#fff">
              <Text style={styles.buttons}>Send Message </Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={this.clearFields} underlayColor="#fff">
              <Text style={styles.buttons}> Reset Message </Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover"
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: "45%"
  },
  heading: {
    fontSize: 36,
    flex: 1,
    fontFamily: "Georgia",
    color: "#fff"
  },
  inputs: {
    flex: 1,
    backgroundColor: "#fff",
    width: "90%",
    marginBottom: 15,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    paddingLeft: 20
  },
  multiInput: {
    flex: 2,
    backgroundColor: "#fff",
    width: "90%",
    marginBottom: 15,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    paddingLeft: 20
  },
  buttons: {
    marginTop: 15,
    fontSize: 16
  },
  btnview: {
    flexDirection: "row"
  }
});
