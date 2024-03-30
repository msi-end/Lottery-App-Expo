import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SHADOWS, SIZES } from '../constant/index'
import { useNavigation } from '@react-navigation/native';

import HeaderComponent from '../components/loginSignup/signupHeader';




const SignUp = () => {
    const navigation=useNavigation()

    return (
        <SafeAreaView>
            <TouchableOpacity style={styles.nviconCtn} onPress={() => { navigation.goBack() }}>
                <Ionicons name='chevron-back-circle' size={SIZES.xxxLarge} style={styles.nvicon} color={COLORS.primary} />
            </TouchableOpacity>
            <ScrollView>
                <HeaderComponent />

            </ScrollView>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({

});

export default SignUp;
