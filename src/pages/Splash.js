import React, { useEffect } from 'react';
import { Image, View, Dimensions, ImageBackground, StyleSheet } from 'react-native';

const background = require('../assets/images/loading_png.png')
const logo = require('../assets/images/alcohol-whale_loading-page.png')

const { width, height } = Dimensions.get('window');

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainTab')
        }, 2000)
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={background} style={{ width, height }} >
                <Image source={logo} style={styles.logoImage} resizeMode='contain' />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    logoImage: {
        position: 'absolute',
        left: width / 4,
        top: height / 3,
        width: 200,
        height: 200
    }
})

export default Splash;