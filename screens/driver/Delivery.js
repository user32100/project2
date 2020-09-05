/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, ScrollView, Image, Alert} from 'react-native';

import {Block, Button, Text} from 'galio-framework';
import theme from '../../theme';

import imgCookie2 from '../../images/cookie2.jpg';
import imgPastry from '../../images/croissant.jpg';
import imgBread2 from '../../images/bread2.jpg';
import imgCake from '../../images/cake.jpg';
import bakery from '../../images/bakery.jpg';
import imgBagel from '../../images/bagel.jpg';

import {DeliveryCard, DataDisplay} from './DeliveryCard';

class Delivery extends Component {
  state = {
    bread: 50,
    pastry: 50,
    cookie: 50,
    dessert: 50,
    bagel: 50,
  };

  breadChange(value) {
    this.setState(() => ({
      bread: parseFloat(value),
    }));
  }

  bagelChange(value) {
    this.setState(() => ({
      bagel: parseFloat(value),
    }));
  }

  cookieChange(value) {
    this.setState(() => ({
      cookie: parseFloat(value),
    }));
  }

  pastryChange(value) {
    this.setState(() => ({
      pastry: parseFloat(value),
    }));
  }

  dessertChange(value) {
    this.setState(() => ({
      dessert: parseFloat(value),
    }));
  }

  render() {
    const {bread, bagel, pastry, cookie, dessert} = this.state;
    const {customer} = this.props.route.params;
    return (
      <Block safe flex backgroundColor={'#FFFDE7'}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <Block flex>
            <Image source={bakery} style={styles.bakeryImageStyle} />
            <Text style={styles.textStyle}>Teslimat İçin Seçiniz </Text>
            <DeliveryCard
              item={bread}
              photo={imgBread2}
              handler={this.breadChange.bind(this)}
              text="EKMEK"
            />

            <DeliveryCard
              item={pastry}
              photo={imgPastry}
              handler={this.pastryChange.bind(this)}
              text="POĞAÇA"
            />

            <DeliveryCard
              item={bagel}
              photo={imgBagel}
              handler={this.bagelChange.bind(this)}
              text="SİMİT"
            />

            <DeliveryCard
              item={dessert}
              photo={imgCake}
              handler={this.dessertChange.bind(this)}
              text="TATLI"
            />
            <DeliveryCard
              item={cookie}
              photo={imgCookie2}
              handler={this.cookieChange.bind(this)}
              text="KURABİYE"
            />
            <DataDisplay
              customer={customer}
              bakeryArray={[bread, pastry, bagel, dessert, cookie]}
            />
            <Button
              size="large"
              color={'#EF9A9A'}
              style={styles.buttonStyle}
              onPress={() => Alert.alert('Not implemented')}>
              <Text
                style={{
                  fontSize: theme.SIZES.FONT * 1.2,
                  color: theme.COLORS.WHITE,
                }}>
                {'ONAYLA'}
              </Text>
            </Button>
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  bakeryImageStyle: {
    marginTop: 50,
    width: '100%',
    height: 100,
    alignSelf: 'center',
  },
  textStyle: {
    marginTop: 30,
    marginBottom: 20,
    alignSelf: 'center',
    fontSize: theme.SIZES.FONT,
  },

  buttonStyle: {
    marginTop: 10,
    margin: 15,
    borderRadius: 5,
    alignSelf: 'center',
    fontSize: theme.SIZES.FONT,
    fontWeight: 'bold',
  },
});

export default Delivery;
