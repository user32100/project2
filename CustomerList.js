import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  Image,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';

import customerData from './CustomerData';
import {Block} from 'galio-framework';
import theme from './theme';

const onPress = () => {
  Alert.alert('Tapped to the Customer');
};

const Customer = ({item}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Block style={styles.listItem}>
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
          <Text>{item.position}</Text>
        </Block>
      </Block>
    </TouchableWithoutFeedback>
  );
};

class CustomerList extends Component {
  state = {data: customerData};
  render() {
    return (
      <Block style={{flex: 1}}>
        <FlatList
          style={{flex: 1}}
          data={this.state.data}
          renderItem={({item}) => <Customer item={item} />}
          keyExtractor={(item) => item.email}
        />
      </Block>
    );
  }
}

/* lego user profiles received from https://randomuser.me/photos */

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

export default CustomerList;