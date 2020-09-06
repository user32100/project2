/* eslint-disable linebreak-style */
import React, {Component} from 'react';
import {
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native';

// galio components
import {Block, Input, Text, Button, Toast} from 'galio-framework';

import theme from '../../theme';

class ForgotPassword2 extends Component {
  constructor(props) {
    super(props);
    this.state = {timer: 300};
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState((prevState) => ({timer: prevState.timer - 1})),
      1000,
    );
  }

  componentDidUpdate() {
    if (this.state.timer === 0) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {timer} = this.state;
    const minutes = Math.floor(timer / 60);
    const seconds = timer - minutes * 60;
    const isShow = timer == 60 ? true : false;

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Block safe flex>
            <Block
              flex={1}
              middle
              style={
                timer <= 60
                  ? {backgroundColor: '#E53935'}
                  : {backgroundColor: '#81C784'}
              }>
              <Text style={styles.textStyle}>
                {`0${minutes}`} : {seconds <= 9 ? `0${seconds}` : seconds}
              </Text>
            </Block>
            <Block flex={2} style={styles.sectionContainer}>
              <Text style={styles.textPadding}>Yeni Şifre</Text>
              <Input
                left
                icon="lock"
                iconColor={theme.COLORS.BLACK}
                fontSize={theme.SIZES.FONT}
                family="fontisto"
                password
                viewPass
              />
              <Text style={styles.textPadding}>Yeni Şifre Tekrar</Text>
              <Input
                left
                icon="lock"
                family="fontisto"
                iconColor={theme.COLORS.BLACK}
                fontSize={theme.SIZES.FONT}
                password
                viewPass
              />
            </Block>
            <Block middle flex={1}>
              <Button
                color="#82B1FF"
                round
                size="large"
                shadowColor="#BBDEFB"
                onPress={() => Alert.alert('Not implemented')}>
                Giriş
              </Button>
            </Block>
            <Toast isShow={isShow} positionIndicator="bottom" color="warning">
              Bir dakika içinde ana sayfaya yönlendirileceksiniz
            </Toast>
          </Block>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.WHITE,
  },

  sectionContainer: {
    paddingHorizontal: 24,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  textStyle: {
    fontSize: theme.SIZES.FONT * 2,
    color: theme.COLORS.WHITE,
  },
  textPadding: {
    marginTop: 15,
    marginLeft: 10,
    fontSize: theme.SIZES.FONT * 1.2,
  },
});

export default ForgotPassword2;

// #FF7043
