import React from 'react';
import { Image, ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const logo = require('../../assets/images/logo.png');
const search = require('../../assets/icons/Search_black.png');
const soju = require('../../assets/icons/liquor/soju_icon.png');
const beer = require('../../assets/icons/liquor/beer_icon.png');
const wihsky = require('../../assets/icons/liquor/whisky_icon.png');
const wine = require('../../assets/icons/liquor/wine_icon.png');

const HomeMain = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={logo} style={styles.logoStyle} resizeMode='contain' />
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Search') }
                        style={styles.searchContainer}>
                        <Text style={{ fontSize: 16, color: '#BBBBBB' }}>검색어를 입력해주세요</Text>
                        <Image source={search} style={{ width: 20, height: 20 }} resizeMode='contain' />
                    </TouchableOpacity>
                    <View style={{ height: 4, backgroundColor: '#BB996A' }} />
                    <View style={styles.alcoholList}>
                        <TouchableOpacity style={styles.alcoholWrapper}>
                            <Image source={soju} style={{ width: 60, height: 60 }} resizeMode='contain' />
                            <Text style={styles.alcoholLabel}>소주</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.alcoholWrapper}>
                            <Image source={beer} style={{ width: 60, height: 60 }} resizeMode='contain' />
                            <Text style={styles.alcoholLabel}>맥주</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.alcoholWrapper}>
                            <Image source={wihsky} style={{ width: 60, height: 60 }} resizeMode='contain' />
                            <Text style={styles.alcoholLabel}>양주</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Image source={wine} style={{ width: 60, height: 60 }} resizeMode='contain' />
                            <Text style={styles.alcoholLabel}>와인</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#BB996A' }} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    logoStyle: {
        width: 150,
        height: 80,
        marginHorizontal: 20,
        marginBottom: 20
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 15,
    },
    alcoholLabel: {
        color: '#BB996A',
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 17
    },
    alcoholList: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 15,
        paddingVertical: 20,
    },
    alcoholWrapper: {
        alignItems: 'center',
        borderRightColor: '#BB996A',
        borderRightWidth: 0.5,
        paddingRight: 20
    }
})

export default HomeMain;