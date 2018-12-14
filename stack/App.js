import { StackNavigator } from "react-navigation";
import Home from "./Screen/Home";
import Second from "./Screen/Second";
import Contact from "./Screen/Contact";
import Registration from "./Screen/Registration";

export default StackNavigator({
  HomeRT: {
    screen: Home,

    navigationOptions: () => ({
      title: "Home"
    })
  },
  SecondRT: {
    screen: Second,

    navigationOptions: () => ({
      title: "Second"
    })
  },
  ContactRT: {
    screen: Contact,

    navigationOptions: () => ({
      title: "Contact"
    })
  },
  RegRT: {
    screen: Registration,

    navigationOptions: () => ({
      title: "Registration"
    })
  }
});
