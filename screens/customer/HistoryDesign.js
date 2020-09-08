import React from 'react';
import {StyleSheet, FlatList, Image} from 'react-native';

import {Block, Text} from 'galio-framework';
import theme from '../../theme';

import imgCookie from '../../images/cookie2.jpg';
import imgPastry from '../../images/croissant.jpg';
import imgBread from '../../images/bread2.jpg';
import imgCake from '../../images/cake.jpg';
import imgBagel from '../../images/bagel.jpg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const officersIds = officers.map(officer => officer.id);
const blueColor = '#E3F2FD';

// object with title and content keys
// object preparation for Accordion props
// array is passed from HistoryData
export function AccordionPropPrep(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var obj = {};
    //var title = array[i].date + '\t\tSipariş Numarası: ' + array[i].orderNumber;
    //var title = (<Text>{array[i].date}</Text>);
    var title = {
      date: array[i].date,
      time: array[i].time,
      no: array[i].orderNumber,
    };
    var content = {
      cInfo: {cName: array[i].customerName, cAddr: array[i].customerAddr},
      orderInfo: {
        bread: array[i].orderItems.bread,
        pastry: array[i].orderItems.pastry,
        bagel: array[i].orderItems.bagel,
        dessert: array[i].orderItems.dessert,
        cookie: array[i].orderItems.cookie,
      },
    };

    obj.title = title;
    obj.content = content;
    result.push(obj);
  }
  return result;
}

function extractItem(data, item) {
  return data[String(item)];
}

export const Header = () => (
  <Block>
    <Block row style={styles.newStyle}>
      <Block flex={1}>
        <Text size={theme.SIZES.FONT} style={{alignSelf: 'center'}}>
          TARİH
        </Text>
      </Block>
      <Block flex={1}>
        <Text size={theme.SIZES.FONT} style={{alignSelf: 'center'}}>
          SAAT
        </Text>
      </Block>
      <Block flex={1} middle>
        <Text size={theme.SIZES.FONT}>SİPARİŞ NO</Text>
      </Block>
    </Block>
    <Block style={{backgroundColor: blueColor, width: '100%', height: 5}} />
  </Block>
);

// orderInfo is title from Accordion
export const Title = ({orderInfo}) => (
  <Block flex={1} row space="between">
    <Text size={theme.SIZES.FONT} style={{alignSelf: 'center', margin: 5}}>
      {orderInfo.date}
    </Text>
    <Text size={theme.SIZES.FONT} style={{alignSelf: 'center'}}>
      {orderInfo.time}
    </Text>
    <Text size={theme.SIZES.FONT} style={{alignSelf: 'center', marginEnd: 10}}>
      {orderInfo.no}
    </Text>
  </Block>
);

// info is content from Accordion
export const Content = ({info}) => (
  <Block style={{borderBottomWidth: 1.5, borderColor: theme.COLORS.BLACK}}>
    <CustomerInfo customer={info.cInfo} />
    <OrderInfo order={info.orderInfo} />
  </Block>
);

// customer is content's cInfo
const CustomerInfo = ({customer}) => (
  <Block style={{borderTopWidth: 1.5, borderColor: theme.COLORS.BLACK}}>
    <Block column style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{alignSelf: 'center', margin: 20, fontWeight: 'bold'}}>
        MÜŞTERİ BİLGİLERİ
      </Text>
      <MaterialCommunityIcons name="chef-hat" color={'#000'} size={23} />
    </Block>
    <Text style={{alignSelf: 'center'}}>{customer.cName}</Text>
    <Text style={{alignSelf: 'center', marginBottom: 10}}>
      {customer.cAddr}
    </Text>
    <Block style={{backgroundColor: theme.COLORS.BLACK, height: 2.4}} />
  </Block>
);

// order is content's orderInfo
const OrderInfo = ({order}) => (
  <Block style={{marginBottom: 20}}>
    <Text style={{alignSelf: 'center', margin: 20, fontWeight: 'bold'}}>
      TESLİMAT BİLGİLERİ
    </Text>
    <FlatList
      style={{flex: 1}}
      data={Object.keys(order)}
      renderItem={({item, index}) => (
        <Item
          itemQuant={String(extractItem(order, item))}
          itemName={bakeryList[index]}
          photo={imgList[index]}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  </Block>
);

const bakeryList = ['Ekmek', 'Poğaça', 'Simit', 'Tatlı', 'Kurabiye'];
const imgList = [imgBread, imgPastry, imgBagel, imgCake, imgCookie];

const Item = ({photo, itemName, itemQuant}) => {
  return (
    <Block style={styles.listItem}>
      <Image
        source={photo}
        style={{
          width: 30,
          height: 30,
          borderRadius: 30,
          alignSelf: 'center',
          marginStart: 15,
        }}
      />
      <Block
        style={{
          alignItems: 'flex-start',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Text style={{color: theme.COLORS.BLACK, marginStart: 50}}>
          {itemQuant} adet {itemName}
        </Text>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  newStyle: {
    marginTop: 30,
    width: '95%',
    margin: 10,
    borderRadius: 8,
    alignSelf: 'baseline',
  },
  listItem: {
    padding: 10,
    backgroundColor: blueColor,
    borderWidth: 0.7,
    borderColor: '#FFF',
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 8,
  },
});

