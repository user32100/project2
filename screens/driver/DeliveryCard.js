/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Image} from 'react-native';

import {Slider, Block, Text} from 'galio-framework';
import theme from '../../theme';

const color = theme.COLORS.WHITE;
const greenColor = '#26A69A';

const ImageRender = ({photo, text}) => (
  <Block
    flex={1}
    backgroundColor={theme.COLORS.WHITE}
    column
    style={{borderColor: greenColor, borderRadius: 8, borderWidth: 2}}>
    <Image source={photo} style={styles.imageStyle} />
    <Text
      style={{
        alignSelf: 'center',
        marginTop: 15,
      }}>
      {text}
    </Text>
  </Block>
);

export const DeliveryCard = ({item, photo, handler, text}) => (
  <Block
    row
    style={styles.cardContainer}
    backgroundColor={greenColor}
    shadow
    shadowColor={greenColor}>
    <ImageRender photo={photo} text={text} />
    {
      // quantity and text part
    }
    <Block flex={2} column>
      <Block flex style={{paddingHorizontal: 10, marginTop: 20}}>
        <Slider
          activeColor={'#1DE9B6'}
          step={5}
          maximumValue={200}
          onValueChange={handler}
          value={item}
          style={{marginTop: 50}}
        />
        <Block row>
          <Block flex={1}>
            <Text
              style={{alignSelf: 'center'}}
              size={theme.SIZES.FONT * 1.2}
              color={color}>
              {'Adet'}
            </Text>
          </Block>
          <Block flex={1}>
            <Text
              color={color}
              size={theme.SIZES.FONT * 1.2}
              style={{alignSelf: 'flex-start'}}>
              {String(item)}
            </Text>
          </Block>
        </Block>
      </Block>
    </Block>
  </Block>
);

const bakeryList = ['Ekmek', 'Poğaça', 'Simit', 'Tatlı', 'Kurabiye'];

const TextPart = ({array}) =>
  array.map((item) => (
    <Text key={item} style={styles.dataText}>
      {item}
    </Text>
  ));

const TextPart2 = ({array}) =>
  array.map((item, index) => (
    <Text key={index} style={{alignSelf: 'center'}}>
      {item}
    </Text>
  ));

export const DataDisplay = ({customer, bakeryArray}) => (
  <Block
    row
    style={styles.dataContainer}
    backgroundColor={theme.COLORS.WHITE}
    shadow>
    <Block
      flex={1}
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
      <Text
        style={{alignSelf: 'center', textDecorationLine: 'underline'}}
        size={theme.SIZES.FONT}
        color={theme.COLORS.BLACK}>
        {customer.name}
      </Text>
      <Text
        style={{alignSelf: 'center'}}
        size={theme.SIZES.FONT}
        color={theme.COLORS.BLACK}>
        {customer.address}
      </Text>
    </Block>
    <Block flex={0.5} style={styles.dataStyle}>
      <TextPart array={bakeryList} />
    </Block>
    <Block flex={0.5} style={styles.borderStyle}>
      <TextPart2 array={bakeryArray} />
    </Block>
  </Block>
);

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 10,
    margin: 15,
    height: 110,
    borderRadius: 8,
  },
  dataContainer: {marginTop: 10, margin: 15, height: 140, borderRadius: 8},
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'center',
  },
  textStyle: {
    marginTop: 30,
    marginBottom: 20,
    alignSelf: 'center',
    fontSize: theme.SIZES.FONT,
  },
  dataStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  dataText: {
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  borderStyle: {
    borderColor: greenColor,
    borderWidth: 2,
    borderRadius: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});
