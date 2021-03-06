import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  toggleUser = () => {
    this.setState(previousState => {
      return { isLoggedIn: !previousState.isLoggedIn };
    });
  };
  render() {
    let display = this.state.isLoggedIn ? "Karan Joshi" : this.props.message;
    return (
      <View style={styles.headStyle}>
        <Image 
        style={styles.logostyle} 
        source={require("./img/5.png")} />

        <Text style={styles.headText} onPress={this.toggleUser}>
          {display}>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headText: {
    textAlign: "right",
    color: "#000000",
    fontSize: 20,
    flex: 1
  },
  headStyle: {
    paddingTop: 30,
    paddingRight: 10,
    backgroundColor: "#35605a",
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: "#000000"
  },
  logostyle: {
    flex: 1,
    width: undefined,
    height: undefined
  }
});
