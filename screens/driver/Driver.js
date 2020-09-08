import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomerList from './CustomerList';
import OrderHistory from './OrderHistory';
import Delivery from './Delivery';
import ReturnOrder from './ReturnOrder';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

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
        name="History"
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
        name="Return"
        component={ReturnOrder}
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
