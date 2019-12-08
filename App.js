// https://blog.cloudboost.io/getting-started-with-react-native-and-redux-6cd4addeb29?
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import Auth from './src/scenes/auth';
import Login from './src/scenes/login';
import Assets from './src/scenes/Assets';

import { Store } from './src/redux/Store';

const LoginStack = createStackNavigator({
  Login: { screen: Login }
})
const AppStack = createStackNavigator({
  Assets: { screen: Assets }
})

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: Auth,
    Login: LoginStack,
    App: AppStack,
  }, {
    initialRouteName: 'Auth',
  }
)


let Navigation = createAppContainer(SwitchNavigator);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    );
  }
}