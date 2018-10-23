import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";

class EventFormm extends Component{
    handleAddPress=() => {

    }

    render() {
        return(
          <View>
              <TouchableHighlight onPress={this.handleAddPress}>
                <Text>Add</Text>
              </TouchableHighlight>
          </View> 
            
        );
    }
}
