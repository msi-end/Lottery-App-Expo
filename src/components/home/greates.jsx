import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {COLORS,   SHADOWS} from '../../constant/index'




const GreatesComponent = () => {
    return (
        <SafeAreaView>
            <View style={styles.Ctn}>
               <Text>Makes Fortunes</Text>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

    Ctn: {
        width: 'auto',
        height: 60,
    },
    menuIcon:{
        position:'absolute',
        top:10,
        left:10,
        flex:1,
        width:50,
        backgroundColor:COLORS.primary,
        borderRadius:13,
        padding:10

    },
    resultIcon:{
        position:'absolute',
        top:10,
        right:10,
        flex:1,
        width:50,
        backgroundColor:COLORS.secondary,
        borderRadius:13,
        padding:10

    }

})
export default GreatesComponent;