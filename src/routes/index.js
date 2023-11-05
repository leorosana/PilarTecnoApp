import React,{ Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs'
import Login from '../screens/Auth/Login'
import Lists from'../screens/Lists/Lists'
import ListDetail from '../screens/Lists/ListDetail'

const Stack = createStackNavigator();

export default AppStack = (props) => {
    const islogged = true
    return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
        {
        true? (
        <Stack.Screen name="AppStack" component={Tabs} />
        ) : (
        <Stack.Screen name="LogIn" component={Login} />
        )
        }
        <Stack.Screen name="Lista" component={Lists} />
        <Stack.Screen name="ListDetail" component={ListDetail} />
    </Stack.Navigator>
    )
}