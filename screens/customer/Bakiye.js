import React, { Component } from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import bgImage from '../../images/bugday.jpg'
import { Text, Block } from 'galio-framework'
import bakiyedata from './BakiyeData'
import theme from '../../theme';
export default class Bakiye extends Component {

    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <Block card={true} alignSelf={"center"} width={150} alignItems="center"  >
                    <Text bold={true} >HESAP BİLGİLERİ</Text>
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
                        <Text bold={true} color={theme.COLORS.BLACK}> Şehir: {bakiyedata[0].city} </Text>
                    </Block>

                    <Block
                        card={true}
                        backgroundColor={theme.COLORS.TRANSPARENT}
                        padding={5}>
                        <Text bold={true} color={theme.COLORS.BLACK}> Kurye: {bakiyedata[0].driverName}  </Text>
                    </Block>
                    <Block
                        card={true}
                        backgroundColor={theme.COLORS.TRANSPARENT}
                        padding={5}>
                        <Text bold={true} color={"#FE0000"}> Toplam Tutar: {bakiyedata[0].total} TL  </Text>
                    </Block>
                    <Block
                        card={true}
                        backgroundColor={theme.COLORS.TRANSPARENT}
                        padding={5}>
                        <Text bold={true} color={"#FE0000"}> Ödenen: {bakiyedata[0].paid} TL </Text>
                    </Block>
                    <Block
                        card={true}
                        backgroundColor={theme.COLORS.TRANSPARENT}
                        padding={5}>
                        <Text bold={true} color={"#FE0000"}> Kalan: {bakiyedata[0].total - bakiyedata[0].paid} TL </Text>
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
        height: '45%',
        alignSelf: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        borderRadius: 5,
    },

});