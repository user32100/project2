import React from 'react';
import {StyleSheet, FlatList, Image, View} from 'react-native';

import {Block, Text} from 'galio-framework';
import theme from '../../theme';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const blueColor = '#E3F2FD';
const darkBlueColor = '#0D47A1';
const tColor = theme.COLORS.TRANSPARENT;
const number = 12;
const returnMoney = [550, 445, 700, 360, 80, 100, 1000, 250];
const blackColor = theme.COLORS.BLACK;
let moneyIndex = -1;

// triangle box received from
//https://stackoverflow.com/questions/57536732/background-border-view-with-up-arrow-triangle-react-native

// card box
const ImageRender = ({iconName}) => (
  <View style={styles.box}>
    <View style={styles.triangle} />
    <View style={styles.triangle2} />
    <Block
      backgroundColor={tColor}
      style={{position: 'absolute', alignSelf: 'center'}}>
      <MaterialCommunityIcons name={iconName} color={'#000'} size={50} />
    </Block>
  </View>
);

const CustomerInfo = ({customer, iconName}) => (
  <Block style={styles.listItem}>
    <ImageRender iconName={iconName} />
    <Block style={styles.blockStyle}>
      <Text style={styles.textStyle}>{customer.cName}</Text>
      <Text style={styles.textStyle}>{customer.cAddr}</Text>
    </Block>
  </Block>
);

const MoneyInfo = ({iconName}) => (
  <Block style={styles.listItem}>
    <ImageRender iconName={iconName} />
    <Block style={styles.blockStyle}>
      <Text style={{color: theme.COLORS.BLACK}}>
        {returnMoney[++moneyIndex]} TL
      </Text>
    </Block>
  </Block>
);

const OrderInfo = ({order, iconName}) => (
  <Block
    style={{
      padding: 4,
      width: '95%',
      flex: 1,
      alignSelf: 'center',
      flexDirection: 'row',
      borderRadius: 7,
      marginBottom: 20,
    }}>
    <View
      style={{
        width: 80,
        height: 100,
        backgroundColor: blueColor,
        position: 'relative',
        borderColor: darkBlueColor,
        borderWidth: 1,
        justifyContent: 'center',
      }}>
      <View style={styles.triangle} />
      <View style={styles.triangle2} />
      <Block
        backgroundColor={tColor}
        style={{position: 'absolute', alignSelf: 'center'}}>
        <MaterialCommunityIcons name={iconName} color={'#000'} size={50} />
      </Block>
    </View>
    <Block style={styles.blockStyle}>
      <Text style={{color: theme.COLORS.BLACK}}>{order.bread} adet Ekmek</Text>
      <Text style={{color: theme.COLORS.BLACK}}>
        {order.pastry} adet Poğaça
      </Text>
      <Text style={{color: theme.COLORS.BLACK}}>{order.bagel} adet Simit</Text>
      <Text style={{color: theme.COLORS.BLACK}}>
        {order.cookie} adet Kurabiye
      </Text>
      <Text style={{color: theme.COLORS.BLACK}}>
        {order.dessert} adet Tatlı
      </Text>
    </Block>
  </Block>
);

// 3 part customer money order
export const Content2 = ({info}) => (
  <Block
    style={{borderBottomWidth: 1.2, borderColor: blackColor, marginTop: 20}}>
    <CustomerInfo customer={info.cInfo} iconName={'chef-hat'} />
    <MoneyInfo iconName={'cash-multiple'} />
    <OrderInfo order={info.orderInfo} iconName={'truck-delivery-outline'} />
  </Block>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  listItem: {
    padding: 4,
    width: '95%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 7,
  },
  textStyle: {color: theme.COLORS.BLACK},
  blockStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderColor: darkBlueColor,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: blueColor,
    position: 'relative',
    borderColor: darkBlueColor,
    borderWidth: 1,
    justifyContent: 'center',
  },
  triangle: {
    width: number,
    height: number,
    position: 'absolute',
    right: -number,
    top: 15,
    borderLeftWidth: number,
    borderLeftColor: darkBlueColor,
    borderTopWidth: number,
    borderTopColor: tColor,
    borderBottomWidth: number,
    borderBottomColor: tColor,
  },
  triangle2: {
    width: number,
    height: number,
    position: 'absolute',
    right: -number,
    top: 16,
    borderLeftWidth: number - 1,
    borderLeftColor: blueColor,
    borderTopWidth: number - 1,
    borderTopColor: tColor,
    borderBottomWidth: number - 1,
    borderBottomColor: tColor,
  },
});
