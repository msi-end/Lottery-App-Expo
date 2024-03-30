import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SHADOWS, SIZES } from '../../constant/index'



const Search = () => {
    const [searchInput, setSearchInput] = useState('')
    const [searchResult, setSearchResult] = useState([])

    return (
        <View style={styles.main}>
            <View style={{ flexDirection: 'row' }}>
                <TextInput style={styles.searchinput} value={searchInput} onChangeText={setSearchInput} placeholder="Search..." />
                <Ionicons name='search' style={styles.searchIcon} size={SIZES.xLarge} color={COLORS.white} />
            </View>
            {searchInput.length === 0 ? (
                <View style={styles.head} >
                    <Image style={styles.imgGraphics} source={require('../../../assets/search_image.png')} />
                </View>
            ) : (
            <View style={styles.head} >
                
            </View>
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        marginTop: SIZES.medium,
        marginHorizontal: 17,
        marginBottom: 15,
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headTitle: {
        fontSize: SIZES.large,
        color: COLORS.primary,
        fontWeight: '700',
    },

    searchinput: {
        flex: 9,
        padding: 8,
        borderBlockColor: COLORS.primary,
        margin: 'auto',
        borderRadius: 10,
        borderWidth: 1,
        marginRight: 5,
        backgroundColor: 'white',

    },
    searchIcon: {
        padding: 10,
        backgroundColor: COLORS.primary,
        borderBlockColor: COLORS.primary,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgGraphics: {
        width: '100%',
        borderRadius: 13,
        top: 100,
        resizeMode: 'contain',
    }
})
export default Search;