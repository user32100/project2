/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import 'react-native-paper';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from './screens/entry/Login';
import BottomTabNavigator from './screens/driver/BottomTabNavigator';
import BottomTabNavigator2 from './screens/customer/BottomTabNavigator2';

class App extends Component {
  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this);
  }

  state = {
    isSignedIn: false,
    isCustomer: false,
  };

  handler(loginData) {
    this.setState({
      isSignedIn: true,
      isCustomer: loginData === 'n' ? false : true,
    });
  }

  /* callbackFunction = (childData) => {
    this.setState({isCustomer: (childData === "n" ? false : true) , isSignedIn: true})
  } */

  render() {
    const {isSignedIn, isCustomer} = this.state;
    return (
      <NavigationContainer>
        {isSignedIn ? (
          isCustomer ? (
            <BottomTabNavigator2 />
          ) : (
            <BottomTabNavigator />
          )
        ) : (
          <Login handler={this.handler} />
        )}
      </NavigationContainer>
    );
  }
}

export default App;
