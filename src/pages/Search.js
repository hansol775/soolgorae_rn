import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const backArrow = require('../assets/icons/arrow_back.png');
const searchIcon = require('../assets/icons/Search_black.png');

const { width } = Dimensions.get('window')

const Search = ({ navigation }) => {
    const [keyword, setKeyword] = useState('')


    useEffect(() => {

    }, [])

    const callSearchApi = async () => {

    }

    const setSearchKeyword = useCallback((text) => {
        setKeyword(text)
    }, [keyword])

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginHorizontal: 20, marginBottom: 30 }}>
                <Image source={backArrow} style={{ width: 20, height: 20 }} resizeMode='contain' />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginBottom: 20 }}>
                <TextInput
                    autoFocus
                    returnKeyType='search'
                    spellCheck={false}
                    autoCorrect={false}
                    autoCapitalize="none"
                    style={{ flex: 1, fontSize: 20, fontWeight: '500', color: '#5A5A5A' }}
                    placeholder={'검색어를 입력해주세요'}
                    placeholderTextColor={'#BBBBBB'}
                    value={keyword}
                    onChangeText={(text) => setSearchKeyword(text)}
                    onSubmitEditing={() => callSearchApi(keyword)}
                />
                <TouchableOpacity onPress={() => callSearchApi()}>
                    <Image source={searchIcon} style={{ width: 20, height: 20 }} resizeMode='contain' />
                </TouchableOpacity>

            </View>
            <View style={{ height: 4, backgroundColor: '#BB996A' }} />

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFF'
    }
})

export default Search;