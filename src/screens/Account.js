import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import HeaderComponent from '../components/account/header.jsx';
import LogInComponent from '../components/account/logedIn.jsx';
import NotLogInComponent from '../components/account/notLogin.jsx';


const Account = () => {
    const [userData, setUserData] = useState(null)
    const [userLogin, setUserLogin] = useState(true)
    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderComponent />
                {userLogin === true ? (<LogInComponent />) : (<NotLogInComponent />)}
            </ScrollView>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({

});

export default Account;
