import React, { Component } from "react";
import { StyleSheet, Text, View,TextInput,ImageBackground } from "react-native";
import { Dice } from "./Home";

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      sname:""
    }
  }
  thirdscreen = () => {
    this.props.navigation.navigate("ContactRT");
  };

  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://i.pinimg.com/originals/7d/e0/46/7de046dc69627ece821f2aba587a646b.jpg"
        }}
        style={styles.backgroundImage}
      >
      <View style={styles.container}>
      
      
      <Dice />


        <Text  style={styles.welcome}>
          Welcome to Second Activity
        </Text>
        <TextInput
        placeholder={"Enter the second name"}
        style={styles.inputs}
        onChangeText={stxt => this.setState({sname:stxt})}
        value={this.state.sname}
        />
        <Text>{this.state.sname}</Text>
        <Text onPress={this.thirdscreen} style={styles.next}>
          Go to Next Page>
        </Text>
        
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
    alignItems: "center",
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
  },
  inputs: {
    backgroundColor: "#fff",
    width: "90%",
    height:"10%",
    fontSize: 20,
  },
  

});
