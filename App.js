import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNav from "./src/navigation/tabBottomNav";
import Lotteries from "./src/screens/Lotteries";
import Results from "./src/screens/Results";
import LotteryDetails from "./src/screens/LotteryDetails";
import TicketsList from "./src/screens/TicketsList";
import SearchTickets from "./src/screens/Search";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";




const Stack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Bottom Navigation' component={BottomTabNav} options={{ headerShown: false }} />
        <Stack.Screen name='AllLottery' component={Lotteries} options={{ headerShown: false }} />
        <Stack.Screen name='AllResults' component={Results} options={{ headerShown: false }} />
        <Stack.Screen name='LotteryDetails' component={LotteryDetails} options={{ headerShown: false }} />
        <Stack.Screen name='TicketsList' component={TicketsList} options={{ headerShown: false }} />
        <Stack.Screen name='SearchTickets' component={SearchTickets} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}