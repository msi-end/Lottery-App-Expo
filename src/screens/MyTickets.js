import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "react-native-vector-icons/Ionicons";
import { SIZES, COLORS } from "../constant/index";
import MyTicketsHeading from "../components/myTickets/MyTicketsHeading";
import MyTicketsList from "../components/myTickets/MyTicketsList";


const Lotteries = ({ navigation }) => {
    return (
        <SafeAreaView>
            <MyTicketsHeading />
            <ScrollView>
                <MyTicketsList />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    nviconCtn: {
        //    backgroundColor:COLORS.secondaryDark,
        borderRadius: 13,
    },
    nvicon: {
        left: 10,
    }

});

export default Lotteries;
