import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';

import customerData from './CustomerData';
import {Block} from 'galio-framework';
import theme from '../../theme';


const Customer = ({handler, item}) => {
  return (
    <TouchableWithoutFeedback onPress={() => handler(item)}>
      <Block style={styles.listItem}>
        <Image
          source={item.photo}
          style={{width: 30, height: 30, borderRadius: 30, alignSelf: 'center'}}
        />
        <Block
          style={{
            alignItems: 'center',
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', color: theme.COLORS.BLACK}}>
            {item.name}
          </Text>
          <Text>{item.address}</Text>
        </Block>
      </Block>
    </TouchableWithoutFeedback>
  );
};

class CustomerList extends Component {
  constructor(props) {
    super(props);

    this.state = {data: customerData, customer: null};
    this.customerDeliveryHandler = this.customerDeliveryHandler.bind(this);
  }

  customerDeliveryHandler(customer) {
    this.setState({
      customer: customer,
    });
    this.props.navigation.navigate('Delivery', {
      customer: customer,
    });
  }

  render() {
    return (
      <Block safe style={styles.container}>
        <StatusBar hidden={false} />
        <FlatList
          style={{flex: 1, marginTop: 20}}
          data={this.state.data}
          renderItem={({item}) => (
            <Customer item={item} handler={this.customerDeliveryHandler} />
          )}
          keyExtractor={(item) => item.email}
        />
      </Block>
    );
  }
}

/* lego user profiles received from https://randomuser.me/photos */
/* flat list template https://reactnativemaster.com/react-native-flatlist-example/ */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
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

export default CustomerList;
