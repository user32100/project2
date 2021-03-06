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
      username: '',
      password: '',
    };
  }

  anotherPress() {
    const { username, password } = this.state;
    Alert.alert(`username: ${username}, password: ${password}`);
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
              <Text style={styles.textPadding}>Kullanıcı Adı</Text>
              <Input
                left
                icon="user"
                iconColor={theme.COLORS.BLACK}
                fontSize={theme.SIZES.FONT}
                family="antdesign"
                style={{ borderColor: inputBorderColor}}
                onChangeText={(username) => this.setState({ username })}
              />
              <Text style={styles.textPadding}>Şifre</Text>
              <Input
                left
                icon="lock"
                family="fontisto"
                iconColor={theme.COLORS.BLACK}
                fontSize={theme.SIZES.FONT}
                style={{ borderColor: inputBorderColor }}
                password
                viewPass
                onChangeText={(password) => this.setState({ password })}
              />
            </Block>
            <Block flex={1}>
              <Block middle>
                <Button
                  color={inputBorderColor}
                  round
                  shadowColor="#BBDEFB"
                  size='large'
                  onPress={this.props.handler}>
                  <Block row center>
                    <Block flex middle left />
                    <Block flex middle center>
                      <Text
                        color={theme.COLORS.WHITE}
                        size={theme.SIZES.FONT * 1.2}>
                        Kaydol
                      </Text>
                    </Block>
                    <Block flex middle right>
                      <Icon
                        style={{marginRight: 30}}
                        name="login"
                        family="antdesign"
                        color={theme.COLORS.WHITE}
                      />
                    </Block>
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
