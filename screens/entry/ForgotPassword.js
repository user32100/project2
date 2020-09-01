/* eslint-disable linebreak-style */
import React from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
  Platform,
  Keyboard,
} from 'react-native';

// galio component
import {Block, Button, Input, NavBar, Text, Icon} from 'galio-framework';
import theme from '../../theme';

const ForgotPassword = ({navigation}) => (
  <KeyboardAvoidingView
    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    style={styles.container}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Block safe flex>
        <NavBar
          title="Şifremi Unuttum"
          onLeftPress={() => navigation.openDrawer()}
          style={
            Platform.OS === 'android' ? {marginTop: theme.SIZES.BASE} : null
          }
        />
        <Block flex={2} style={styles.sectionContainer}>
          <Text style={styles.textPadding}>Kullanıcı Adı</Text>
          <Input
            left
            icon="user"
            iconColor={theme.COLORS.BLACK}
            fontSize={theme.SIZES.FONT}
            family="antdesign"
            borderColor={theme.COLORS.BLACK}
          />
          <Text style={styles.textPadding}>TC</Text>
          <Input
            left
            icon="idcard"
            family="antdesign"
            //type="number-pad"
            iconColor={theme.COLORS.BLACK}
            fontSize={theme.SIZES.FONT}
          />
        </Block>
        <Block flex={1}>
          <Block middle>
            <Button
              color="#82B1FF"
              round
              shadowColor="#BBDEFB"
              onPress={() => Alert.alert('Not implemented')}>
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

  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default ForgotPassword;
