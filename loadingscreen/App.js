import React, {Component} from 'react';
import Loader from 'react-loader-spinner';

export default class App extends Component {
  render() {
    return (
      <Text>HEllo </Text>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });




// import React, {Component} from 'react';
// import { StyleSheet, Text, View} from 'react-native';
// import Home from './Home.js';
// import Loader from './Loader.js';
// import { StackNavigator } from 'react-navigation';

// const NextWindow = StackNavigator({

//   loader:{
//     screen: Loader,
//     navigationOptions: () => ({
//       title: "Loader"
//     }),
//   },
//      home: {
//        screen: Home,
//        navigationOptions: () => ({
//          title: "home"
//        }),
//      }
//    });
  
//    export default NextWindow;