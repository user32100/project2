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
import {Searchbar} from 'react-native-paper';
import {InitialScreen} from './Driver';
import Delivery from './Delivery';

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

    this.state = {
      data: customerData,
      customer: null,
      searchQuery: '',
    };
    this.customerDeliveryHandler = this.customerDeliveryHandler.bind(this);
  }

  customerDeliveryHandler(customer) {
    this.setState({
      customer: customer,
    });
    this.props.navigation.navigate('Screens', {
      customer: customer,
    });
  }

  onChangeSearch = (query) => {
    this.setState(
      {
        searchQuery: query,
      },
      this.filterDistributers,
    );
  };

  filterDistributers = () => {
    this.setState({
      data: customerData.filter((customer) =>
        customer.distributer
          .toLocaleUpperCase('tr-TR')
          .replace('İ', 'I')
          .includes(
            this.state.searchQuery.toLocaleUpperCase('tr-TR').replace('İ', 'I'),
          ),
      ),
    });
  };

  render() {
    return (
      <Block safe style={styles.container}>
        <Searchbar
          placeholder="Bayi Giriniz"
          onChangeText={this.onChangeSearch.bind(this)}
          value={this.state.searchQuery}
          style={{margin: 20}}
        />
        <FlatList
          style={{flex: 1}}
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
    backgroundColor: '#FFF',
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#E3F2FD',
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
  textStyle: {
    marginTop: 40,
    marginBottom: 10,
    fontSize: theme.SIZES.FONT,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default CustomerList;
