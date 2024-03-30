import React from 'react';
import { View, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES, SHADOWS } from '../../constant/index'
import { useNavigation } from "@react-navigation/native";



const HeaderComponent = () => {
    const navigation = useNavigation()
    return (

        <View style={styles.Ctn}>
            <TouchableOpacity style={styles.menuIcon}>
                <Fontisto name="nav-icon-list-a" size={20} color="white" />
            </TouchableOpacity>
            <Pressable android_ripple={{ color: COLORS.secondaryDark, borderless: true }} style={styles.searchIcon} onPress={() => { navigation.navigate('SearchTickets') }}>
                <Ionicons name='search' size={SIZES.xLarge} color={COLORS.primary} />
            </Pressable>
            <Pressable android_ripple={{ color: COLORS.primary, borderless: true }} style={styles.resultIcon} onPress={() => { navigation.navigate('AllResults') }}>
                <FontAwesome6 name="ranking-star" size={20} color={COLORS.primary} />
            </Pressable>
        </View>

    )
}
const styles = StyleSheet.create({

    Ctn: {
        width: 'auto',
        height: 60,
    },
    menuIcon: {
        position: 'absolute',
        top: 10,
        left: 10,
        flex: 1,
        width: 50,
        backgroundColor: COLORS.primary,
        borderRadius: 13,
        padding: 10

    },
    resultIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        flex: 1,
        width: 50,
        backgroundColor: COLORS.secondaryDark,
        borderRadius: 13,
        padding: 10

    },
    searchIcon: {
        position: 'absolute',
        top: 10,
        right: 70,
        width: 50,
        padding: 10,
        justifyContent:'center',
        alignItems:'center'

    }

})
export default HeaderComponent;