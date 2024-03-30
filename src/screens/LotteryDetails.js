import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "react-native-vector-icons/Ionicons";
import { SIZES, COLORS } from "../constant/index";
import LotteryDeatailsHeading from "../components/lotteryDetails/LotteryHeading";
import TicketsList from "../components/lotteryDetails/TicketsTypeList";


const Lotteries = ({ navigation }) => {
    return (
        <SafeAreaView>
            <TouchableOpacity style={styles.nviconCtn} onPress={() => { navigation.goBack() }}>
                <Ionicons name='chevron-back-circle' size={SIZES.xxxLarge} style={styles.nvicon} color={COLORS.primary} />
            </TouchableOpacity>
            <ScrollView>
                <LotteryDeatailsHeading />
                <TicketsList/>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    nviconCtn: {
        borderRadius: 13,
    },
    nvicon: {
        left: 10,
    }

});

export default Lotteries;
