import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text} from 'react-native'; // Text
import CustomerList from './CustomerList';
import OrderHistory from './OrderHistory';
import Delivery from './Delivery';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

const DeliveryScreens = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="CustomerList">
      <Stack.Screen name="CustomerList" component={CustomerList} />
      <Stack.Screen name="Delivery" component={Delivery} />
    </Stack.Navigator>
  );
};

const Driver = () => {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      initialRouteName="DeliveryScreens"
      barStyle={{backgroundColor: '#0D47A1'}}>
      <Tab.Screen
        name="Settings"
        component={OrderHistory}
        options={{
          tabBarLabel: 'Geçmiş',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="history" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="DeliveryScreens"
        component={DeliveryScreens}
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
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'İade',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="cash-refund"
              color={color}
              size={23}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Driver;
