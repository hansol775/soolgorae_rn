import React from 'react';
import { Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Splash from './Splash';

import HomeMain from './Home/HomeMain';
import RateMain from './Rate/RateMain';
import NoticeMain from './Notice/NoticeMain';
import MyPageMain from './MyPage/MyPageMain';

import Search from './Search';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <Stack.Navigator headerMode={'none'} initialRouteName={'HomeMain'}>
            <Stack.Screen name="HomeMain" component={HomeMain} />
        </Stack.Navigator>
    )
}

const Rate = () => {
    return (
        <Stack.Navigator headerMode={'none'} initialRouteName={'RateMain'}>
            <Stack.Screen name="RateMain" component={RateMain} />
        </Stack.Navigator>
    )
}

const Notice = () => {
    return (
        <Stack.Navigator headerMode={'none'} initialRouteName={'NoticeMain'}>
            <Stack.Screen name="NoticeMain" component={NoticeMain} />
        </Stack.Navigator>
    )
}

const MyPage = () => {
    return (
        <Stack.Navigator headerMode={'none'} initialRouteName={'MyPageMain'}>
            <Stack.Screen name="MyPageMain" component={MyPageMain} />
        </Stack.Navigator>
    )
}

const MainTab = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            tabBarOptions={{
                showLabel: false,
                // activeTintColor: '#755ff8',
                style: { height: 80, paddingBottom: 20 }
            }}
        >
            <Tab.Screen
                name="홈"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={focused ? require('../assets/icons/home_fill.png') : require('../assets/icons/home_stroke.png')} resizeMode={'contain'} style={{ width: 25, height: 25 }} />
                    )
                }}
            />
            <Tab.Screen
                name="별점"
                component={Rate}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={focused ? require('../assets/icons/rate_fill.png') : require('../assets/icons/rate_stroke.png')} resizeMode={'contain'} style={{ width: 25, height: 25 }} />
                    )
                }}
            />
            <Tab.Screen
                name="알림"
                component={Notice}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={focused ? require('../assets/icons/notice_fill.png') : require('../assets/icons/notice_stroke.png')} resizeMode={'contain'} style={{ width: 25, height: 25 }} />
                    )
                }}
            />
            <Tab.Screen
                name="마이페이지"
                component={MyPage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={focused ? require('../assets/icons/mypage_fill.png') : require('../assets/icons/mypage_stroke.png')} resizeMode={'contain'} style={{ width: 25, height: 25 }} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const MainRouter = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode={'none'}
                initialRouteName={'Splash'}
                screenOptions={{ gestureEnabled: true }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="MainTab" component={MainTab} />
                <Stack.Screen name="Search" component={Search} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainRouter;