import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet, View, Text} from 'react-native'; // Text
import CustomerList from './CustomerList';

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

const BottomTabNavigator = () => {
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
            <MaterialCommunityIcons name="home" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Geçmiş',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="history" color={color} size={23} />
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
              size={23}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
