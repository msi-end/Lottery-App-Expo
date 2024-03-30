import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, RefreshControl, Alert, Dimensions, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SHADOWS, SIZES } from '../../constant/index'
import RippleComponent from 'react-native-material-ripple';




const CartTicketList = () => {
    const { height, width } = Dimensions.get('window')
    const [cartData, setCartData] = useState([]);
    const [CartTotal, setCartTotal] = useState();
    const [refreshing, setRefreshing] = useState(false);

    const OnRefresh = useCallback(() => {
        setRefreshing(true);
        getCartData()
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }, [])

    const getCartData = async () => {
        try {
            const data = await AsyncStorage.getItem('@cartData');
            setCartData(data ? JSON.parse(data) : []);
            countCartTotal()
        } catch (err) {
            console.error('error to cart delete Fn() ln:37:', err);
            setCartData([]);
        }
    };

    useEffect(() => {
        getCartData();
    }, []);

    const deleteCartItem = async (index) => {
        try {
            const UpdCartData = [...cartData];
            UpdCartData.splice(index, 1);
            setCartData(UpdCartData);
            countCartTotal()
            await AsyncStorage.setItem('@cartData', JSON.stringify(UpdCartData));
        } catch (err) {
            console.error('Error in cart delete Fn() ln:37:', err);
        }
    };
    const countCartTotal = async (index) => {
        try {
            const data = await AsyncStorage.getItem('@cartData');
            let TotalPrice = 0
            JSON.parse(data).forEach(e => { TotalPrice += e.price });
            setCartTotal(Math.round(TotalPrice))
        } catch (err) {
            console.error('error to cart delete Fn() ln:53:', err);
            setCartTotal([]);
        }
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.itemCtn}>
            <View style={styles.item}>
                <View>
                    <Ionicons name='ticket' size={SIZES.xxxLarge + 10} style={styles.mainIcon} color={COLORS.primary} />
                </View>
                <View>
                    <Text style={styles.headTitle}>{item.productName}</Text>
                    <Text>Quantity: {item.quantity}</Text>
                    <Text>Price: ${item.price}</Text>
                </View>
                <View>
                    <Text style={styles.price}>${item.price}</Text>
                    <TouchableOpacity onPress={() => handleDelete(index)}>
                        <Ionicons name='remove-circle' size={SIZES.xLarge} style={styles.deleteIcon} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );

    const handleDelete = (index) => {
        Alert.alert(
            'Confirm Ticket Delete',
            'Are you sure you want to delete this Ticket?',
            [{ text: 'Cancel', style: 'cancel', },
            { text: 'OK', onPress: () => deleteCartItem(index) },
            ], { cancelable: false });
    };

    return (
        <View styles={styles.main}>
            <FlatList
                style={{
                    height: height - 250,
                    flexGrow: 0
                }}
                data={cartData}
                keyExtractor={(item, index) => index.toString()}
                enableEmptySections={true}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 20 }}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={OnRefresh} />}
            />
            {CartTotal ? <Text style={[styles.price, styles.totalPrice]}>Total Price : {CartTotal}</Text> :
                <Text style={[styles.price, styles.totalPrice]}>Total Price : 00.00</Text>}
            <RippleComponent rippleContainerBorderRadius={20} rippleOpacity={.7} style={[styles.btn,]} rippleColor={COLORS.secondaryDark}>
                <Pressable style={styles.btnCtn} >
                    <Ionicons name='card-outline' size={SIZES.xLarge} style={styles.icon} color={COLORS.white} />
                    <Text style={[styles.text, { color: COLORS.white, fontSize: SIZES.medium, fontWeight: '700' }]} >  Pay now</Text>
                </Pressable>
            </RippleComponent>
        </View>
    )
}
const styles = StyleSheet.create({

    main: {
        flex: 1,
        marginTop: SIZES.medium,
        marginHorizontal: 17,
        marginBottom: 15,
    },
    itemCtn: {
        alignItems: 'center',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '90%',
        padding: 15,
        marginBottom: 20,
        backgroundColor: COLORS.white,
        borderRadius: 13,

    },
    mainIcon: {

    },
    deleteIcon: {
        position: 'absolute',
        left: 70,
        top: 0,
    },
    headTitle: {
        fontSize: SIZES.medium,
        color: COLORS.primary,
        fontWeight: '700',
    },
    price: {
        fontSize: SIZES.medium + 3,
        color: COLORS.primary,
        fontWeight: '700',
    },
    totalPrice: {
        marginTop: 10,
        marginRight: '10%',
        marginBottom: 10,
        textAlign: 'right'
    },
    btn: {
        borderRadius: 15,
        alignItems: 'center',
    }, btnCtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        bottom: 0,
        padding: 15,
        backgroundColor: COLORS.primary,
        borderRadius: 13
    }


})
export default CartTicketList;



    // const storeProductData = async (product) => {
    //     console.log(product);
    //     try {
    //         const existingData = await AsyncStorage.getItem('@cartData');
    //         const parsedData = existingData ? JSON.parse(existingData) : [];
    //         parsedData.push(product);
    //         await AsyncStorage.setItem('@cartData', JSON.stringify(parsedData));
    //     } catch (error) {
    //         console.error('Error storing product data:', error);
    //     }
    // };

   // const handleAddToCart = () => {
    //     const productName = 'Product 1';
    //     const quantity = 2;
    //     const price = 130.97;
    //     storeProductData({ productName, quantity, price });
    // };