import React, { Component } from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import bgImage from '../../images/bugday.jpg'
import { Text, Block } from 'galio-framework'
import bakiyedata from './KuryeData'
import theme from '../../theme';
export default class Kurye extends Component {

    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <Block card={true} alignSelf={"center"} width={150} alignItems="center"  >
                    <Text bold={true} >KURYE BİLGİLERİ</Text>
                </Block>
                <Block style={styles.listItem} card={true}  >

                    <Block
                        card={true}
                        backgroundColor={theme.COLORS.TRANSPARENT}
                        padding={5}>
                        <Text bold={true} color={theme.COLORS.BLACK}> İsim: {bakiyedata[0].name}  </Text>
                    </Block>
                    <Block
                        card={true}
                        backgroundColor={theme.COLORS.TRANSPARENT}
                        padding={5}>
                        <Text bold={true} color={theme.COLORS.BLACK}> Soyisim: {bakiyedata[0].surname} </Text>
                    </Block>
                    <Block
                        card={true}
                        backgroundColor={theme.COLORS.TRANSPARENT}
                        padding={5}>
                        <Text bold={true} color={theme.COLORS.BLACK}> Mail: {bakiyedata[0].mail} </Text>
                    </Block>

                    <Block
                        card={true}
                        backgroundColor={theme.COLORS.TRANSPARENT}
                        padding={5}>
                        <Text bold={true} color={theme.COLORS.BLACK}> Telefon: {bakiyedata[0].phoneNumber}  </Text>
                    </Block>
                    <Block
                        card={true}
                        backgroundColor={theme.COLORS.TRANSPARENT}
                        padding={5}>
                        <Text bold={true} color={"#FE0000"}> Başlangıç: {bakiyedata[0].start}  </Text>
                    </Block>
                    <Block
                        card={true}
                        backgroundColor={theme.COLORS.TRANSPARENT}
                        padding={5}>
                        <Text bold={true} color={"#FE0000"}> Bitiş: {bakiyedata[0].stop}  </Text>
                    </Block>

                </Block>

            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    listItem: {
        margin: 5,
        padding: 10,
        width: '70%',
        height: '40%',
        alignSelf: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        borderRadius: 5,
    },

});
