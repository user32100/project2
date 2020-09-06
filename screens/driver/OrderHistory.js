import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import orderData from './HistoryData';
import {Block} from 'galio-framework';
import theme from '../../theme';
import {AccordionPropPrep, Header} from './HistoryDesign';
import HistoryAccordion from './HistoryAccordion';

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
      <Block flex backgroundColor={theme.COLORS.WHITE}>
        <Header />
        <HistoryAccordion
          dataArray={data}
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
    borderColor: '#26A69A',
  },
});

export default OrderHistoryList;
