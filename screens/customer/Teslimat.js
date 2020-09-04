import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  Image,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import teslimatData from './TeslimatData';
import {Block} from 'galio-framework';
import theme from '../../theme';
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const onPress = () => {
    Alert.alert(
        '',
        'Teslimatı onaylıyor musunuz?',
        [
          {text: 'Ertele', onPress: () => console.warn('Ask me later pressed')},
          {text: 'HAYIR', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
          {text: 'EVET', onPress: () => console.warn('OK Pressed')},
        ],
        { cancelable: false }
      );
};

const Teslimat2 = ({item}) => {
  state={onPress};
  return (
    <TouchableWithoutFeedback onPress={()=>(this.state.onPress)}>
      <Block style={styles.listItem} >
        <Image
          source={item.photo}
          style={{width: 30, height: 30, borderRadius: 30}}
        />
        <Block
          style={{
            alignItems: 'center',
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', color: theme.COLORS.BLACK}}>
            {item.name}
          </Text>
          <Text style={{fontWeight: 'bold', color: "#F90404"}}>
            {item.content}
          </Text>
          <Text style={{ fontWeight: 'bold', color: "#43D607"}}>
            {item.cost}
          </Text>
        </Block>
      </Block>
    </TouchableWithoutFeedback>
  );
};
const Teslimat3 = ({item}) => {
  return (
    <TouchableWithoutFeedback >
      <Block style={styles.listItem} >
        <Image
          source={item.photo}
          style={{width: 30, height: 30, borderRadius: 30}}
        />
        <Block
          style={{
            alignItems: 'center',
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', color: theme.COLORS.BLACK}}>
            {item.name}
          </Text>
          <Text style={{fontWeight: 'bold', color: "#F90404"}}>
            {item.content}
          </Text>
          <Text style={{ fontWeight: 'bold', color: "#43D607"}}>
            {item.cost}
          </Text>
        </Block>
      </Block>
    </TouchableWithoutFeedback>
  );
};

const Accepted = () =>{
  state = {data: teslimatData};
    return (
      <Block style={{flex: 1}} backgroundColor={"#43D607"}>
        <FlatList
          style={{flex: 1}}
          data={this.state.data}
          renderItem={({item}) => <Teslimat3 item={item} />}
          keyExtractor={(item) => item.email}
        />
      </Block>
    );
  
}
const Waiting = () =>{
  state = {data: teslimatData};
    return (
      <Block style={{flex: 1} } backgroundColor={"#43D607"}>
        <FlatList
          style={{flex: 1}}
          data={this.state.data}
          renderItem={({item}) => <Teslimat2 item={item} />}
          keyExtractor={(item) => item.email}
        />
      </Block>
    );
}

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      barStyle={{ backgroundColor: '#558B2F' }}>
      <Tab.Screen
        name="Bekleyen"
        component={Waiting}
        options={{
          tabBarLabel: 'Bekleyenler',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="truck-delivery-outline"
              color={color}
              size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Onaylananlar"
        component={Accepted}
        options={{
          tabBarLabel: 'Onaylananlar',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="history"
              color={color}
              size={23} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

/* lego user profiles received from https://randomuser.me/photos */
/* flat list template https://reactnativemaster.com/react-native-flatlist-example/ */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 60,
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
});

export default TopTabNavigator;