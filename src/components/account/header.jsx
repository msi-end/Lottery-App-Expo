import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Pressable, Image } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES, SHADOWS } from '../../constant/index'
import { useNavigation } from "@react-navigation/native";



const HeaderComponent = () => {

    return (
        <View style={styles.Ctn}>
            <Image style={styles.profileBackgroun} source={require('../../../assets/profile_background.jpg')} />
            <View style={styles.profile}>
                <Image style={styles.profileImg} source={require('../../../assets/profile_icon.jpg')} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    Ctn: {
        width: 'auto',
    },
    profileBackgroun: {
        resizeMode: 'contain',
        width: '100%',
        height: 300,
        opacity: 0.2
    },
    profile: {
        flex: 1,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }, profileImg: {
        width: 155,
        height: 155,
        resizeMode: 'cover',
        borderRadius: 100,
        borderWidth: 2,
        borderColor: COLORS.gray2,
        marginTop: -120,
    }



})
export default HeaderComponent;