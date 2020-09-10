import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import orderData from './HistoryData';
import {Block} from 'galio-framework';
import theme from '../../theme';
import {AccordionPropPrep, Header, CustomerInfo} from './HistoryDesign';
import HistoryAccordion from './HistoryAccordion';

class OrderHistoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: AccordionPropPrep(orderData),
    };
  }

  findCustomer(customer1) {
    const customer = this.state.data.find(
      (custom) => custom.content.cInfo.cName === customer1.name,
    ).content.cInfo;
    this.state = {
      data: AccordionPropPrep(orderData),
    };
    return customer;
  }

  render() {
    const data = this.state;
    const {customer} = this.props.route.params;
    return (
      <Block flex style={{backgroundColor: theme.COLORS.WHITE}}>
        <CustomerInfo customer={this.findCustomer(customer)} />
        <Header />
        <HistoryAccordion
          dataArray={this.state.data}
          headerStyle={styles.headerStyle}
          style={styles.listItemStyle}
        />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  listItemStyle: {
    marginBottom: 10,
    backgroundColor: '#FFF',
    width: '95%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 8,
  },
  headerStyle: {
    borderBottomWidth: 1.2,
    borderColor: '#E8EAF6',
  },
});

export default OrderHistoryList;
// <CustomerInfo customer={this.findCustomer(customer)} />
