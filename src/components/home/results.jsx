import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SHADOWS, SIZES } from '../../constant/index'



const ResultsViewCtn = () => {
    const navigation = useNavigation()
    // const [img, setImg] = useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     const fetchImages = async () => {
    //         try {
    //             const res = await fetch('https://images.unsplash.com/photo-1612177241462-d254edf4e823?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNjcxMTI1Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1900');
    //             const imgData = await response.json()
    //             setImg(imgData)
    //         } catch (err) {
    //             console.error('Error While fetching Cities:', err)
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     fetchImages();
    // }, []);
    // if (loading) {
    //     return (
    //         <View style={styles.loadingCtn}>
    //             <ActivityIndicator size="large" color="#0000ff" />
    //         </View>
    //     );
    // }
    return (
        <View style={styles.main}>
            <View style={styles.head}>
                <Text style={styles.headTitle}> Previous Results</Text>
                <Pressable android_ripple={{color:COLORS.primary,borderless:true}}  onPress={() => { navigation.navigate("AllResults")}}><Ionicons name="grid" size={SIZES.large} color={COLORS.primary} /></Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    main: {
        marginTop: SIZES.medium,
        marginHorizontal: 17,
        marginBottom:15,
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headTitle: {
        fontSize: SIZES.Large,
        color: COLORS.primary,
        fontWeight: '700'
    },

})
export default ResultsViewCtn;