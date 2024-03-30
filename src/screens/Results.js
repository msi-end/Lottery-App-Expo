import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "react-native-vector-icons/Ionicons";
import { SIZES, COLORS } from "../constant/index";
import ResultHeading from "../components/results/ResultHeading";
import ResultList from "../components/results/ResultList";


const Lotteries = ({ navigation }) => {
    return (
        <SafeAreaView>
            <TouchableOpacity style={styles.nviconCtn}  onPress={() => { navigation.goBack() }}>
                <Ionicons name='chevron-back-circle' size={SIZES.xxxLarge} style={styles.nvicon} color={COLORS.primary} />
            </TouchableOpacity>
            <ScrollView>
                <ResultHeading/>
                <ResultList/>
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
