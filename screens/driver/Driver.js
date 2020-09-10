import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomerList from './CustomerList';
import OrderHistory from './OrderHistory';
import Delivery from './Delivery';
import ReturnOrder from './ReturnOrder';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Delivery';

  switch (routeName) {
    case 'Delivery':
      return 'Teslimat';
    case 'History':
      return 'Geçmiş';
    case 'Return':
      return 'İade';
  }
}

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const headerColor = '#26A69A';

const Screens = ({route}) => {
  const {customer} = route.params;
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      initialRouteName="Delivery"
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
        initialParams={{customer: customer}}
      />
      <Tab.Screen
        name="Delivery"
        component={Delivery}
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
        initialParams={{customer: customer}}
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
        initialParams={{customer: customer}}
      />
    </Tab.Navigator>
  );
};

const Driver = () => (
  <Stack.Navigator initialRouteName="CustomerList">
    <Stack.Screen
      name="Screens"
      component={Screens}
      options={({route}) => ({
        headerTitle: getHeaderTitle(route),
        headerStyle: {
          backgroundColor: '#FFF',
        },
        headerTintColor: headerColor,
        headerTitleAlign: 'center',
      })}
    />
    <Stack.Screen
      name="CustomerList"
      component={CustomerList}
      options={{
        title: 'Müşteri Listesi',
        headerStyle: {
          backgroundColor: '#FFF',
        },
        headerTintColor: '#000',
        headerTitleAlign: 'center',
      }}
    />
  </Stack.Navigator>
);

export default Driver;
