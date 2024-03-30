import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SHADOWS, SIZES } from '../constant/index'

import HeaderComponent from '../components/cart/Header';
import CartTicketList from '../components/cart/ticketList';




const Cart = () => {

  return (
    <SafeAreaView>
      <HeaderComponent />
        <CartTicketList />
      <ScrollView >
      </ScrollView>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({

});

export default Cart;
