import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';

import orderData from './HistoryData';
import {Block, Text} from 'galio-framework';
import theme from './theme';


const Order = ({item, color}) => {
  return (
    <Block backgroundColor={color} style={styles.listItem}>
      <Text>{item.date}</Text>
      <Text>{item.orderNumber}</Text>
      <Text>{item.customerName}</Text>
      <Text>{item.customerAddr}</Text>
      <Block
          style={{
            alignItems: 'center',
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', color: theme.COLORS.BLACK}}>
            {item.order.bread}
          </Text>
          <Text>{item.position}</Text>
        </Block>
    </Block>
  );
};

class OrderHistoryList extends Component {
  state = {data: orderData};
  render() {
    const colors = ['#FFEBEE', theme.COLORS.WHITE];
    return (
      <Block style={{flex: 1}}>
        <FlatList
          style={{flex: 1}}
          data={this.state.data}
          renderItem={({item, index}) => (
            <Order item={item} color={colors[index % colors.length]} />
          )}
          keyExtractor={(item) => item.email}
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
    backgroundColor: '#FFF',
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
});

export default OrderHistoryList;
