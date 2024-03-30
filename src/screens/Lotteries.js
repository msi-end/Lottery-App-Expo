import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "react-native-vector-icons/Ionicons";
import { SIZES, COLORS } from "../constant/index";
import LotteryHeading from "../components/lottory/LotteryHeading";
import LotteriesList from "../components/lottory/LotteryList";


const Lotteries = ({ navigation }) => {
    return (
        <SafeAreaView>
            <TouchableOpacity style={styles.nviconCtn}  onPress={() => { navigation.goBack() }}>
                <Ionicons name='chevron-back-circle' size={SIZES.xxxLarge} style={styles.nvicon} color={COLORS.primary} />
            </TouchableOpacity>
            <ScrollView>
                <LotteryHeading/>
                <LotteriesList/>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    nviconCtn: {
       backgroundColor:COLORS.secondaryDark,
       borderRadius:13,
    },
    nvicon: {
        left: 10,
    }

});

export default Lotteries;
