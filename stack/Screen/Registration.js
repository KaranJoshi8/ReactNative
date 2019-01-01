import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import ValidateComponent from "react-native-form-validator";

export default class Registration extends ValidateComponent {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      contact: "",
      email: "",
      password: "",
      
    };
  }

  onsubmit = () => {
    const nameval = /^[a-zA-Z][a-zA-Z ]*$/;
    if (
      this.validate({ fname: { minlength: 3 } }) &&
      nameval.test(this.state.fname) === true
    ) {
      if (this.validate({ contact: { minlength: 9, numbers: true } })) {
        if (this.validate({ email: { email: true } })) {
          if (this.validate({ password: { minlength: 3 } })) {
            this.props.navigation.navigate("HomeRT");
          } else {
            alert(
              "Enter Valid Password " + "\r\n" + "Enter a minimum 3 variable"
            );
          }
        } else {
          alert("Enter Valid Email" + "\r\n" + "Enter a valid format of email");
        }
      } else {
        alert("Enter valid Contact" + "\r\n" + "Enter minimum 10 numbers");
      }
    } else {
      alert("Enter Valid Name" + "\r\n" + "Enter minimum 3 characters");
    }
  };

  render() {
    return (
      <ImageBackground
        source={{
          uri: "https://i.lensdump.com/i/TwNLD.jpg"
        }}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Text style={styles.header}>Registration Form</Text>

          <TextInput
            style={styles.inputs}
            placeholder={"Enter the Name"}
            maxLength={25}
            onChangeText={txtname => this.setState({ fname: txtname })}
            value={this.state.fname}
          />

          <TextInput
            style={styles.inputs}
            placeholder={"Enter the Contact"}
            maxLength={12}
            onChangeText={numcon => this.setState({ contact: numcon })}
            value={this.state.contact}
          />

          <TextInput
            style={styles.inputs}
            placeholder={"Enter the Email"}
            maxLength={30}
            onChangeText={femail => this.setState({ email: femail })}
            value={this.state.email}
          />

          <TextInput
            style={styles.inputs}
            placeholder={"Enter the Password"}
            maxLength={30}
            secureTextEntry={true}
            onChangeText={pswd => this.setState({ password: pswd })}
            value={this.state.password}
          />

          <TouchableOpacity onPress={this.onsubmit}>
            <Text style={styles.touch}>Register</Text>
          </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    alignItems: "flex-start",
    fontSize: 25,
    fontStyle: "italic",
    color: "#fff"
  },
  inputs: {
    backgroundColor: "#fff",
    width: "90%",
    height: "10%",
    fontSize: 20,
    margin: 10
  },
  touch: {
    fontSize: 30,
    color: "#fff"
  }
});
