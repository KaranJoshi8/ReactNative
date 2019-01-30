import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./App/Reducers/index";
import CounterAction from "./App/Actions/CounterAction";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterAction />
      </Provider>
    );
  }
}
