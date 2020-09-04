import React, { Component, Children } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {  View, Text } from 'react-native';
import Teslimat from './Teslimat';
import {Block} from 'galio-framework';
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function New2Screen() {
  return (
    <Block>
      <Text>Galatasaray</Text>
    </Block>
  );
}
function NewScreen() {
  return (
    <Block>
      <Text>Galatasaray</Text>
    </Block>
  );
}
const BottomTabNavigator2 = () => {
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
        component={SettingsScreen}
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
        component={New2Screen}
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
        component={NewScreen}
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

export default BottomTabNavigator2;
