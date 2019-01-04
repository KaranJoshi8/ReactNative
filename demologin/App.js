import React from 'react';
import { ScrollView } from 'react-native';
import ValidationComponent from 'react-native-form-validator';
import Login from './Login.js';
// import { StackNavigator } from 'react-navigation';


export default class App extends ValidationComponent {

  render() {
    return (
      <ScrollView>
        <Login />
      </ScrollView>
    );
  }
}


// const StackNav = StackNavigator({

//   home: {
//     screen: Login,
//     navigationOptions: () => ({
//       title: "home"
//     }),
//   }
// });

// export default StackNav;
