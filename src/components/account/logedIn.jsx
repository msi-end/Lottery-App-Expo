import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES, SHADOWS } from '../../constant/index'
import { useNavigation } from "@react-navigation/native";



const LogedIn = () => {

    return (
        <View style={styles.Ctn}>
            <View style={styles.user}>
                <Text style={[styles.userText,{color:COLORS.gray}]} >Hell'w,</Text>
                <Text style={[styles.userText,{color:COLORS.primaryLight}]} > Username</Text>
            </View>
            <View style={styles.main}>
                <TouchableOpacity onPress={() => { navigation.navigate('') }}>
                    <View style={styles.item}>
                        <View style={styles.First} >
                            <Ionicons name='document-text-outline' size={SIZES.xLarge + 2} color={COLORS.gray} />
                            <Text style={styles.text} > Profile</Text>
                        </View>
                        <Ionicons name='arrow-forward-circle-outline' size={SIZES.xLarge} color={COLORS.gray2} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('') }}>
                    <View style={styles.item}>
                        <View style={styles.First} >
                            <Ionicons name='settings-outline' size={SIZES.xLarge + 2} color={COLORS.gray} />
                            <Text style={styles.text} > Settings</Text>
                        </View>
                        <Ionicons name='arrow-forward-circle-outline' size={SIZES.xLarge} color={COLORS.gray2} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('') }}>
                    <View style={styles.item}>
                        <View style={styles.First} >
                            <Ionicons name='log-out-outline' size={SIZES.xLarge + 2} color={COLORS.gray} />
                            <Text style={styles.text} > Logout</Text>
                        </View>
                        <Ionicons name='arrow-forward-circle-outline' size={SIZES.xLarge} color={COLORS.gray2} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Ctn: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    user: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },
    userText: {
        fontSize: SIZES.xLarge+5,
        textAlign: 'center',
        fontWeight:'bold'
    },
    main: {
        width: '80%',
        backgroundColor: COLORS.white,
        margin: 30,
        padding: 20,
        borderRadius: 13
    }, item: {
        padding: 15,
        borderBottomColor: COLORS.gray2,
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, First: {
        marginRight: 5,
        color: COLORS.gray,
        flexDirection: 'row',
    },
    text: {
        color: 'black',
        fontSize: SIZES.medium,
        fontWeight: '900',
    },




})
export default LogedIn;