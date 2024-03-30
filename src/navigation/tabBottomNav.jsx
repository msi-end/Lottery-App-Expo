import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS, SIZES, SHADOWS } from '../constant/index'



import Home from '../screens/Home';
import Ticket from '../screens/MyTickets';
import Cart from '../screens/Cart';
import Account from '../screens/Account';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Tab = createBottomTabNavigator();

BottomTabNav = () => {
    const screenOptions = ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Explore') {
                iconName = 'home';
            } else if (route.name === 'My tickets') {
                iconName = 'ticket';
            } else if (route.name === 'Account') {
                iconName = 'user';
            } else if (route.name === 'Cart') {
                iconName = 'shopping-bag';
            }
            return <FontAwesome name={iconName} size={30} color={color} />
        },
        headerShown: false,
        "tabBarActiveTintColor": COLORS.primary,
        "tabBarInactiveTintColor": COLORS.gray,
        "tabBarStyle": [
            {
                "display": "flex",
                height: 60,
                alignItems:'center',
                justifyContent:'center',
                borderTopRightRadius:13,
                borderTopLeftRadius:13,
                paddingBottom:7
            },
            null
        ]
    })

    return (
        <Tab.Navigator
            screenOptions={screenOptions}>
            <Tab.Screen name="Explore" component={Home} />
            <Tab.Screen name="My tickets" component={Ticket} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    );
}
export default BottomTabNav;