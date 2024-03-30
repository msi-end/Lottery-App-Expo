import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SHADOWS, SIZES } from '../../constant/index'


const TicketsList = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.main}>
            <View style={{ borderRadius: 50, overflow: 'hidden' }}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#fff000', false)} onPress={() => { navigation.navigate("TicketsList")}}>
                    <View style={styles.head} >
                        <View style={[styles.round, styles.left]}></View>
                        <View style={styles.box}>
                            <Text style={styles.headTitle}>Ticket Price</Text>
                            <Text style={styles.Price}>100/-</Text>
                        </View>
                        <View style={styles.line}></View>
                        <View style={[styles.round, styles.right]}></View>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View style={styles.head} >
                <View style={[styles.round, styles.left]}></View>
                <View style={styles.box}>
                    <Text style={styles.headTitle}>Ticket Price</Text>
                    <Text style={styles.Price}>300/-</Text>
                </View>
                <View style={styles.line}></View>
                <View style={[styles.round, styles.right]}></View>
            </View>
            <View style={styles.head} >
                <View style={[styles.round, styles.left]}></View>
                <View style={styles.box}>
                    <Text style={styles.headTitle}>Ticket Price</Text>
                    <Text style={styles.Price}>500/-</Text>
                </View>
                <View style={styles.line}></View>
                <View style={[styles.round, styles.right]}></View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({

    main: {
        marginTop: SIZES.medium,
        marginHorizontal: 17,
        marginBottom: 50,
    },
    head: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffcc00ff',
        margin: 10,
        height: 130,
        flexDirection: 'row',
        borderRadius: 16,
    },
    headTitle: {
        fontSize: SIZES.large,
        color: COLORS.primary,
        fontWeight: '700',
    },
    Price: {
        fontSize: SIZES.xxLarge,
        color: COLORS.primary,
        fontWeight: '700',
    },

    round: {
        backgroundColor: '#F2F2F2',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'flex-end',

    },
    left: {
        position: 'relative',
        left: '150%'
    },
    right: {
        position: 'relative',
        right: "150%"
    },
    line: {
        height: '100%',
        borderLeftWidth: 5,
        borderStyle: 'dotted',
        borderColor:COLORS.white,
        position: 'relative',
        left: '60%'
    },
    box: {
        width: 150,
        height: 100,
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 13,
        left: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }

})
export default TicketsList;