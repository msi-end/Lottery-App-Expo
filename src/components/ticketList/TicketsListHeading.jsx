import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SHADOWS, SIZES } from '../../constant/index'



const TicketsListHeading = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.main}>
            <Pressable onPress={() => { navigation.navigate('SearchTickets') }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.searchinput} >
                        <Text>Search Tickets...</Text>
                    </View>
                    <Ionicons name='search' style={styles.searchIcon} size={SIZES.xLarge} color={COLORS.white} />
                </View>
            </Pressable>
            <View style={styles.head} >
                <Text style={styles.headTitle}>Tickets</Text>
            </View>
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
        marginRight: 5

    },
    searchIcon: {
        padding: 10,
        backgroundColor: COLORS.primary,
        borderBlockColor: COLORS.primary,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }


})
export default TicketsListHeading;