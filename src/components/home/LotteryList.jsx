import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FA from 'react-native-vector-icons/FontAwesome5';
import { COLORS, SHADOWS, SIZES } from '../../constant/index'
import { useNavigation } from '@react-navigation/native';



const CitiesListCtn = () => {
    const navigation = useNavigation()
    const [img, setImg] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await fetch('https://images.unsplash.com/photo-1612177241462-d254edf4e823?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNjcxMTI1Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1900');
                const imgData = await response.json()
                setImg(imgData)
            } catch (err) {
                console.error('Error While fetching Cities:', err)
            } finally {
                setLoading(false);
            }
        }
        fetchImages();
    }, []);
    if (loading) {
        return (
            <View style={styles.loadingCtn}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
    return (
        <View style={styles.listCtn}>

            <TouchableOpacity style={styles.listElm} onPress={()=>{navigation.navigate('LotteryDetails')}}>
                <View style={styles.listElmChild}>
                    <FA name="city" size={35} color={COLORS.primary} />
                    <Text style={styles.listElmText}>Nagaon</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.text}>Lot.:</Text>
                    <Text style={styles.text}>80</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.listElm} onPress={()=>{navigation.navigate('LotteryDetails')}}>
                <View style={styles.listElmChild}>
                    <FA name="city" size={35} color={COLORS.primary} />
                    <Text style={styles.listElmText}>Morigaon</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.text}>Lot.:</Text>
                    <Text style={styles.text}>80</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.listElm} onPress={()=>{navigation.navigate('LotteryDetails')}}>
                <View style={styles.listElmChild}>
                    <FA name="city" size={35} color={COLORS.primary} />
                    <Text style={styles.listElmText}>Morigaon</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.text}>Lot.:</Text>
                    <Text style={styles.text}>80</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    listCtn: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    listElm: {
        width: '90%',
        padding: 15,
        backgroundColor: COLORS.secondaryDark,
        borderRadius: 13,
        marginBottom: 10,
    },
    listElmChild: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listElmText: {
        fontSize: SIZES.medium,
        fontWeight: '600',
        color: COLORS.primary,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    text: {
        color: COLORS.primary,
        fontSize: 12,
    }
})
export default CitiesListCtn;