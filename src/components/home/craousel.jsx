import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS, SIZES } from "../../constant/index";


const ImageSliderCtn = () => {
    // const [img, setImg] = useState([])
    // const [loading, setLoading] = useState(true)

    const images = [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", // Network image
    ]
    // useEffect(() => {
    //     const fetchImages = async () => {
    //         try {
    //             const res = await fetch('https://images.unsplash.com/photo-1612177241462-d254edf4e823?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNjcxMTI1Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1900');
    //             const imgData = await response.json()
    //             setImg(imgData)
    //         } catch (err) {
    //             console.error('Error While fetching img:', err)
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     fetchImages();
    // }, []);
    // if (loading) {
    //     return (
    //         <View style={styles.loadingCtn}>
    //             <ActivityIndicator size={SIZES.large} color="#0000ff" />
    //         </View>
    //     );
    // }
    return (
        <View style={styles.Ctn}>
            <SliderBox
                styles={styles.imgCtn}
                images={images}
                slideBoxHeight={250}
                docColor={COLORS.primary}
                inactiveDocColor="#90A4AE"
                ImageComponentStyle={{borderRadius: 15, width: '92%', marginTop: 15}}
                imageLoadingColor={COLORS.primary}
                autoPlay={true}
                circleLoop={true}
            />
        </View>
    )
}
const styles = StyleSheet.create({

    // Ctn: {
    //     flex: 1
    // },
    imgCtn: {
        margin: 10,
        borderRadius: 7,
    },
    loadingCtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }


})
export default ImageSliderCtn;