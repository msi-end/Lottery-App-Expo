import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SHADOWS, SIZES } from '../../constant/index'



const LotteryDeatailsCtn = (navigation) => {
    return (
        <View style={styles.mainBox}>
            <View style={styles.main} >
                <Image source={{ uri: "https://source.unsplash.com/1024x768/?nature" }} style={styles.image} />
                <View style={styles.Details}>
                    <Text style={styles.Title}>Morigaon</Text>
                    {/* <View>   </View> */}
                    <View style={styles.rowElm}>
                        <Text style={styles.text}>Lot.:</Text>
                        <Text style={styles.text}>80</Text>
                    </View>
                    <View style={styles.rowElm}>
                        <Text style={styles.text}>Lot.:</Text>
                        <Text style={styles.text}>Lot.:</Text>
                        <Text style={styles.text}>80</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.headTitle}>Ticket Categories</Text>
        </View>
    )
}
const styles = StyleSheet.create({

    mainBox: {
        marginTop: SIZES.medium,
        marginHorizontal: 17,
        marginBottom: 15,
    },
    main: {
        backgroundColor: COLORS.secondaryDark,
        borderRadius: 13,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        shadowColor: COLORS.black,
    },
    headTitle: {
        fontSize: SIZES.large,
        color: COLORS.primary,
        fontWeight: '700',
        margin: 10,
    },
    image: {
        width: '100%',
        height: 200,
        backgroundColor: 'red',
        borderRadius: 13,
    },
    Details: {
        width: '90%',
        padding: 15,
        borderRadius: 13,
        marginBottom: 10
    },
    Title: {
        fontSize: SIZES.medium,
        fontWeight: '600',
        color: COLORS.primary,
    },
    // Childs: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    // },
    rowElm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },

})
export default LotteryDeatailsCtn;