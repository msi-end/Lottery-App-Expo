
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SHADOWS, SIZES } from '../../constant/index'



const Header = () => {
    return (
        <View style={styles.main}>
            <View style={styles.head} >
                <Text style={styles.headTitle}>My Cart</Text>
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

})
export default Header;