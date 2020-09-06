import React, { Component, Children } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Teslimat from './Teslimat';
import History from './History';
import Bakiye from './Bakiye';
import Kurye from './Kurye';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


const Customer = () => {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      barStyle={{ backgroundColor: '#0D47A1' }}>
      <Tab.Screen
        name="Teslimat"
        component={Teslimat}
        options={{
          tabBarLabel: 'İstekler',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="truck-delivery-outline"
              color={color}
              size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'Geçmiş',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="history"
              color={color}
              size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Bakiye"
        component={Bakiye}
        options={{
          tabBarLabel: 'Bakiye',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="scale-balance"
              color={color}
              size={23}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Şoför Bilgileri"
        component={Kurye}
        options={{
          tabBarLabel: 'Kurye',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="bike"
              color={color}
              size={23}
            />
          ),
        }} />
    </Tab.Navigator>
  );
};

export default Customer;
