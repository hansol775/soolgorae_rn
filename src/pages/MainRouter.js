import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from './Splash';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainRouter = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode={'none'}
                initialRouteName={'Splash'}
                screenOptions={{ gestureEnabled: true }}
            >
                <Stack.Screen name="Splash" component={Splash} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainRouter;