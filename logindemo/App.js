import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Splash from './Splash.js'
import Login from './login.js';

const StackNav = StackNavigator({
  splash: {
    screen: Splash
  },
  home: {
    screen: Login,
    // navigationOptions: () => ({
    //   title: "home"
    // }),
  }
});

// const Drawer = DrawerNavigator({
//   myhome: {
//     screen: StackNav
//   },
// });

export default StackNav;

