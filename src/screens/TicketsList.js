import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { SIZES, COLORS } from "../constant/index";
import TicketsListHeading from "../components/ticketList/TicketsListHeading";
import TicketsList from "../components/ticketList/TicketsList";
import { useNavigation } from '@react-navigation/native';


const TicketsLists = ({ navigation }) => {
    const navigator = useNavigation()
    return (
        <SafeAreaView>
            <View style={styles.nav}>
                <TouchableOpacity style={styles.nviconCtn} onPress={() => { navigation.goBack() }}>
                    <Ionicons name='chevron-back-circle' size={SIZES.xxxLarge} style={[styles.icon, styles.left]} color={COLORS.primary} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.nviconCtn} onPress={() => { navigator.navigate('Cart') }}>
                    <FontAwesome name='shopping-bag' size={SIZES.xxLarge} style={[styles.icon, styles.right]} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <TicketsListHeading />
                <TicketsList />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nviconCtn: {
        borderRadius: 13,
    },
    icon: {
        top: 5
    },
    left: {
        left: 10,
    },
    right: {
        right: 20,
    }

});

export default TicketsLists;
