/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import 'react-native-paper';
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native'; // Text
import {Button, Input, Block, Text, Icon} from 'galio-framework';
import theme from './theme';
import {NavigationContainer} from '@react-navigation/native';
import CustomerList from './CustomerList';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from './Login';

import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './SignUp';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

function BottomDrawer() {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      barStyle={{backgroundColor: '#0D47A1'}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Geçmiş',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="history" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Display Options"
        component={CustomerList}
        options={{
          tabBarLabel: 'Teslimat',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="truck-delivery-outline"
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this);
  }

  state = {
    isSignedIn: false,
  };

  handler() {
    this.setState({
      isSignedIn: true,
    });
  }

  render() {
    const {isSignedIn} = this.state;

    return (
      <NavigationContainer>
        {isSignedIn ? <BottomDrawer /> : <Login handler={this.handler} />}
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  parentBody: {
    backgroundColor: '#B2DFDB',
  },

  sectionContainer: {
    paddingHorizontal: 24,
  },
  textPadding: {
    marginTop: 15,
    marginLeft: 10,
    color: theme.COLORS.WHITE,
    fontSize: theme.SIZES.FONT * 1.5,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default App;
