// Created By Karan Joshi on 1-1-2019
// Imports
import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import Images from "./assets/bg.jpg";
import Logo from "./assets/instagram.png";
import Copyright from "./assets/copyright.png";
import ValidateComponent from "react-native-form-validator";

//class and constructor
export default class App extends ValidateComponent {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      email: "",
      password: "",
      confirmpassword: ""
    };
  }

  // Validation
  onsubmit = () => {
    // const nameval = /^[a-zA-Z][a-zA-Z ]*$/;
    if (
      this.validate({ fname: { minlength: 3 } })
      // && nameval.test(this.state.fname) === true
    ) {
      if (this.validate({ email: { email: true } })) {
        if (this.validate({ password: { minlength: 3 } })) {
          if (this.state.password == this.state.confirmpassword) {
            alert("Confirmed Successfully");
          } else {
            alert("Password did Not Matched...");
          }
        } else {
          alert(
            "Enter Valid Password " + "\r\n" + "Enter a minimum 3 variable"
          );
        }
      } else {
        alert("Enter Valid Email" + "\r\n" + "Enter a valid format of email");
      }
    } else {
      alert("Enter Valid Name" + "\r\n" + "Enter minimum 3 characters");
    }
  };

  render() {
    return (
      //for background Image
      <ImageBackground source={Images} style={styles.backgroundImage}>
        {/* // for Scrolling */}
        <ScrollView contentContainerStyle={styles.contentContainer}>
		  {/* Header View */}
		  
          <View style={styles.container}>
		  <Image source={Logo} style={{height:70,width:70,margin:20}}/>
      <Text style={{fontStyle:"italic",color:'black'}}>Instagram</Text>
            <Text style={styles.header}>SIGN UP</Text>
          </View>
          {/* form Attributes */}
          <Text style={styles.textmargin}>USERNAME</Text>
          <View style={styles.container1}>
            <TextInput
              style={styles.textInput}
              placeholder={" username129"}
              placeholderTextColor="#fff"
              maxLength={25}
              onChangeText={txtname => this.setState({ fname: txtname })}
              value={this.state.fname}
            />
          </View>
          <Text style={styles.textmargin}>EMAIL</Text>
          <View style={styles.container1}>
            <TextInput
              style={styles.textInput}
              placeholder={" username@me.com"}
              placeholderTextColor="#fff"
              maxLength={80}
              onChangeText={femail => this.setState({ email: femail })}
              value={this.state.email}
            />
          </View>
          <Text style={styles.textmargin}>PASSWORD</Text>
          <View style={styles.container1}>
            <TextInput
              style={styles.textInput}
              placeholder={" ***************"}
              placeholderTextColor="#fff"
              maxLength={30}
              secureTextEntry={true}
              onChangeText={pswd => this.setState({ password: pswd })}
              // value={this.state.password}
            />
          </View>
          <Text style={styles.textmargin}>CONFIRM PASSWORD</Text>
          <View style={styles.container1}>
            <TextInput
              style={styles.textInput}
              placeholder={" ***************"}
              placeholderTextColor="#fff"
              maxLength={30}
              secureTextEntry={true}
              onChangeText={pswd => this.setState({ confirmpassword: pswd })}
              // value={this.state.confirmpassword}
            />
          </View>
          {/* Button For Confirm */}
          <View style={styles.container1}>
            <TouchableOpacity style={styles.touch} onPress={this.onsubmit}>
              <Text style={styles.touchtext}> CONFIRM </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.alreadyuser}>
            <Text style={{ color: "#fff" }}>already User? </Text>
            <TouchableOpacity>
              <Text style={{ color: "#fff", textDecorationLine: "underline"}}>
                Click Here
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.terms}>
            <TouchableOpacity>
              <Text style={{ color: "#fff", paddingRight: 40 }}>
                Privacy Policy{" "}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ color: "#fff" }}>Terms Of Service</Text>
            </TouchableOpacity>
          </View>
		  <View style={{alignItems:'center',justifyContent:"center",flexDirection:"row",margin:20}}>
		  <Image source={Copyright} style={{height:20,width:20}}/>
		  <Text style={{color:'black'}}> Designed and Developed By Karan Joshi</Text>
		  </View>
	    </ScrollView>
      </ImageBackground>
    );
  }
}

// Stylesheet
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover"
  },
  container: {
    alignItems: "center"
  },
  container1: {
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    alignItems: "flex-start",
    fontSize: 35,
    marginBottom: 20,
    color: "#7CFC00",
    fontWeight: "bold",
    fontFamily: "serif"
  },
  touch: {
    backgroundColor: "#1E90FF",
    borderRadius: 25,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
   height: 40
  },
  touchtext: {
    fontSize: 15,
    color: "#fff"
  },
  textInput: {
    backgroundColor: "#C0C0C0",
    width: "75%",
    alignItems: "center",
    borderRadius: 25,
    opacity: 0.8,
    color: "#fff",
    margin: 5
  },
  textmargin: {
    fontSize: 13,
    marginLeft: 60,
    color: "#fff",
    marginTop: 20
  },
  alreadyuser: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30
  },
  terms: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    
  }
});

// inputs: {
//   backgroundColor: "#fff",
//   width: "90%",
//   height: "10%",
//   fontSize: 20,
//   margin: 10
// },
