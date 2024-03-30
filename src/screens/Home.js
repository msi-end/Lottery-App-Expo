import React from 'react';
import {  StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageSliderCtn from '../components/home/craousel.jsx';
import HeaderCtn from '../components/home/header.jsx';
import CitiesViewCtn from '../components/home/Lottery.jsx';
import CitiesListCtn from '../components/home/LotteryList.jsx';
import ResultsViewCtn from '../components/home/results.jsx';
import ResultsListCtn from '../components/home/resultsList.jsx';


const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderCtn />
            <ScrollView>
                <ImageSliderCtn />
                <CitiesViewCtn />
                <CitiesListCtn />
                <ResultsViewCtn />
                <ResultsListCtn />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
