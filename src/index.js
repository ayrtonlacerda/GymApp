import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import './config/ReactotronConfig';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
