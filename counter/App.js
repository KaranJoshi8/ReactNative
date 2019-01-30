import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './App/Reducers/index';
import CounterAction from './App/Actions/CounterAction';

export default class App extends Component {
  constructor(props){
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <CounterAction />
            </Provider>
        );
    }
}