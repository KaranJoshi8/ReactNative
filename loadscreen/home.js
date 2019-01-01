import React , {Component} from 'react';
//import { View } from 'react-native';
import Loader from 'react-loader-spinner';
// import Loader from './node_modules/react-loader-spinner/dist/loading/puff.js';

export default class Home extends Component {
  render() {
    return (
      
        <Loader type="Audio" color="#00BFFF" height="100" width="100" />
    
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
