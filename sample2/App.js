/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class App extends Component {

  constructor(){
    super()
    this.state = {}
    this.state.customstyles={
    color: 'red'
}

setInterval(()=>{
  if(this.state.customstyles.color == 'red')
  {
  this.setState({
    customstyles: {
      color: 'green'
    }
  })
}else{
  this.setState({
    customstyles: {
      color: 'red'
    }
  })
}
  
},1000)
}
  

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.welcome,this.state.customstyles]}>Welcome to Sample 2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'blue'
  
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
