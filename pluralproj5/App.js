import React from "react";
import { Home } from "./app/views/Home.js";
import { StackNavigator} from 'react-navigation';
import { Contact } from './app/views/Contact.js'

const Myroutes = StackNavigator(
  {
  
    ContactRT: {
      screen: Contact
    }
  },
  {
    initialRouteName: "ContactRT"
  }
);
export default class App extends React.Component {
  render() {
    return <Myroutes />;
  }
}