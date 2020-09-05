import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';

import orderData from './HistoryData';
import {Accordion, Block, Text} from 'galio-framework';
import theme from '../../theme';

const Order = ({item, color}) => {
  return (
    <Block backgroundColor={color} style={styles.listItem}>
      <Text style={styles.textMargin}>{item.date}</Text>
      <Text style={styles.textMargin}>{item.orderNumber}</Text>
      <Text style={styles.textMargin}>{item.customerName}</Text>
      <Text style={styles.textMargin}>{item.customerAddr}</Text>
      {/*<Block
          style={{
            alignItems: 'center',
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', color: theme.COLORS.BLACK}}>
            {item.order.bread}
          </Text>
          <Text>{item.position}</Text>
        </Block>*/}
    </Block>
  );
};

// const officersIds = officers.map(officer => officer.id);

function AccordionPropPrep(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var obj = {};
    //var title = array[i].date + '\t\tSipariş Numarası: ' + array[i].orderNumber;
    var title = (
      <Block flex>
        <Text style={{color: theme.COLORS.FACEBOOK}}>{array[i].date}</Text>
        <Text style={{color: theme.COLORS.FACEBOOK}}>{array[i].time}</Text>
        <Text style={{color: theme.COLORS.FACEBOOK}}>
          {array[i].orderNumber}
        </Text>
      </Block>
    );
    var content =
      'Müşteri Bilgileri: \n\n' +
      'Ad: ' +
      array[i].customerName +
      '\n\n' +
      'Adres: ' +
      array[i].customerAddr +
      '\n\n' +
      'Teslimat Bilgileri:\n\n' +
      '\t\tEkmek - ' +
      array[i].orderItems.bread +
      '\n' +
      '\t\tPoğaça - ' +
      array[i].orderItems.pastry +
      '\n' +
      '\t\tKurabiye - ' +
      array[i].orderItems.cookie;

    obj.title = title;
    obj.content = content;
    result.push(obj);
  }
  return result;
}

class OrderHistoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: AccordionPropPrep(orderData),
    };
  }

  render() {
    const colors = ['#FFF8E1', theme.COLORS.WHITE];
    const {data} = this.state;
    return (
      <Block style={{flex: 1}}>
        <Accordion
          dataArray={data}
          headerStyle={{color: theme.COLORS.ERROR}}
          contentStyle={{
            fontWeight: 'bold',
            backgroundColor: theme.COLORS.ERROR,
            color: theme.COLORS.WHITE,
          }}
          style={styles.newStyle}
        />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 60,
  },
  listItem: {
    padding: 10,
    backgroundColor: '#FFF',
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
  textMargin: {marginLeft: 5},

  newStyle: {
    borderColor: theme.COLORS.ERROR,
    padding: 10,
    margin: 10,
    marginTop: 30,
    backgroundColor: '#FFF',
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
});

export default OrderHistoryList;
