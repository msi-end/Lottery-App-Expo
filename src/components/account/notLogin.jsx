import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES, SHADOWS } from '../../constant/index'
import { useNavigation } from "@react-navigation/native";
import RippleComponent from 'react-native-material-ripple';



const notLogedin = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.Ctn}>
            <RippleComponent onPress={() => { navigation.navigate('Login') }}  rippleContainerBorderRadius={20} rippleOpacity={.7} style={[styles.btn, styles.login]} rippleColor={COLORS.secondaryDark}>
                <Pressable style={styles.btnCtn}  >
                    <Ionicons name='log-in-outline' size={SIZES.xLarge} style={styles.icon} color={COLORS.white} />
                    <Text style={styles.text}>Login</Text>
                </Pressable>
            </RippleComponent>
            <Text style={[styles.text, { color: COLORS.primary, marginTop: 20 }]}>___Or___</Text>
            <RippleComponent onPress={() => { navigation.navigate('SignUp') }} rippleContainerBorderRadius={20} rippleOpacity={.7} style={[styles.btn, styles.signup]} rippleColor={COLORS.secondaryDark}>
                <Pressable style={styles.btnCtn} >
                    <Ionicons name='person-add' size={SIZES.xLarge} style={styles.icon} color={COLORS.primary} />
                    <Text style={[styles.text, { color: COLORS.primary }]} >Sign Up</Text>
                </Pressable>
            </RippleComponent>
        </View>
    )
}
const styles = StyleSheet.create({

    Ctn: {
        flex: 1,
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        marginTop: 25,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    }, btnCtn: {
        flexDirection: 'row',
    }, login: {
        width: '60%',
        padding: 15,
        backgroundColor: COLORS.primary,
    }, signup: {
        width: '50%',
        padding: 15,
        backgroundColor: COLORS.white,
        borderWidth: 2,
        borderColor: COLORS.primary,

    },
    icon: {
        left: -10,
    }, text: {
        color: COLORS.white,
        fontSize: SIZES.medium,
        textAlign: 'center',
        fontWeight: '900'
    }

})
export default notLogedin;