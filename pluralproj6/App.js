import React from "react";
import { Home } from "./app/views/Home.js";
import { StackNavigator} from 'react-navigation';
import { Contact } from './app/views/Contact.js';
import { Video } from './app/views/video.js'
import { VideoDetail } from './app/views/Videodetail.js'

const Myroutes = StackNavigator(
  {
  
    HomeRT:{
      screen: Home
    },
    ContactRT: {
      screen: Contact
    },
    LessonsRT: {
      screen: Video
    },
    VideoDetailRT: {
      screen:VideoDetail
    }
  },
  {
    initialRouteName: "HomeRT"
  }
);
export default class App extends React.Component {
  render() {
    return <Myroutes />;
  }
}