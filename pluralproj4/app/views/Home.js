import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../sections/Header.js";
import { Hero } from "../sections/Hero.js";

export class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header message="press to login" />
        <Hero />
        <Text style={{flex:6}}>These other lines are here..!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },
  textstyle: {
    justifyContent: "center",
    alignItems: "center"
  }
});
