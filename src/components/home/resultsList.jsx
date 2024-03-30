
import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, ActivityIndicator, StyleSheet } from 'react-native';
import FA from 'react-native-vector-icons/FontAwesome';
import { COLORS, SHADOWS, SIZES } from '../../constant/index'



const ResultsListCtn = () => {
    const [img, setImg] = useState([])
    const [loading, setLoading] = useState(true)
const d =[1,2,3,4]
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
              {d.map((item) => (
                <Pressable android_ripple={{ color: COLORS.secondary, borderless: true }} style={styles.listElm}>
                    <View style={styles.listElmChild}>
                        <FA name="ticket" size={35} color={COLORS.primary} />
                        <Text style={styles.listElmText}>{item}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.text}>nagaon</Text>
                        <Text style={styles.text}>800</Text>
                    </View>
                </Pressable>
                 ))}
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
        width: 170,
        padding: 15,
        backgroundColor: COLORS.secondaryDark,
        borderRadius: 13,
        marginBottom: 10
    },
    listElmChild: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listElmText: {
        fontSize: SIZES.large,
        fontWeight: '600',
        color: COLORS.primary,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        overflow: 'hidden'
    },
    text: {
        color: COLORS.primary,
        fontSize: SIZES.medium
    }
})
export default ResultsListCtn;