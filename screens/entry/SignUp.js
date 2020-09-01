/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
  Platform,
  Keyboard,
} from 'react-native';

// galio component
import {Block, Button, Input, Text, Icon} from 'galio-framework';
import theme from './theme';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idNo: '',
      email: '',
    };
  }

  anotherPress() {
    const { idNo, email } = this.state;
    Alert.alert(`idNo: ${idNo}, email: ${email}`);
  }

  render() {
      const inputBorderColor = '#82B1FF';
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Block safe flex>
            <Block flex={2} style={styles.sectionContainer}>
            <Text style={styles.textPadding}>TC Kimlik No</Text>
              <Input
                left
                icon="user"
                iconColor={theme.COLORS.BLACK}
                fontSize={theme.SIZES.FONT}
                family="antdesign"
                style={{ borderColor: inputBorderColor}}
                onChangeText={(idNo) => this.setState({ idNo })}
              />
              <Text style={styles.textPadding}>Email</Text>
              <Input
                left
                icon="user"
                iconColor={theme.COLORS.BLACK}
                fontSize={theme.SIZES.FONT}
                family="antdesign"
                style={{ borderColor: inputBorderColor}}
                onChangeText={(email) => this.setState({ email })}
              />
            </Block>
            <Block flex={1}>
              <Block middle>
                <Button
                  color={inputBorderColor}
                  round
                  shadowColor="#BBDEFB"
                  size="large"
                  onPress={this.props.handler}>
                  <Block row center>
                    <Block flex middle left />
                    <Block flex middle center>
                      <Text
                        color={theme.COLORS.WHITE}
                        size={theme.SIZES.FONT * 1.2}>
                        Devam
                      </Text>
                    </Block>
                    <Block flex middle right />
                  </Block>
                </Button>
              </Block>
            </Block>
          </Block>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  sectionContainer: {
    paddingHorizontal: 24,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  textPadding: {
    marginTop: 15,
    marginLeft: 10,
    fontSize: theme.SIZES.FONT * 1.2,
  },
});

export default SignUp;
