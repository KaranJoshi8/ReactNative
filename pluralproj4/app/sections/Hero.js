import React from "react";
import { StyleSheet,Image } from "react-native";

export class Hero extends React.Component {
  render() {
    return <Image style={{width:200,height:200}} source={require("./img/2.jpg")} />;
  }
}

const styles = StyleSheet.create({
  
});
