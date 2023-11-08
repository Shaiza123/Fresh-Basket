import React from 'react'
import { Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen/index';
import Login from '../screens/Login/index';
import Register from '../screens/Register/index';
import Home from '../screens/Home/index';
import Cart from '../screens/Cart/index';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Favourite from '../screens/Favourite/index';
import Profile from '../screens/Profile/index';
import DetailScreen from '../screens/DetailScreen/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {

    const HomeTab = () => (
        <Tab.Navigator
            barStyle={{ backgroundColor: '#fff' }}
            screenOptions={{
                tabBarInactiveTintColor: '#000',
                tabBarActiveTintColor: '#4CAF50',
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Image style={{ tintColor: color }} resizeMode='contain' source={require("../assets/home.png")} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ color ,focused}) => (
                        focused ? 
                        <Ionicons name="cart" color={color} size={26} /> :
                        <Feather name="shopping-cart" color={color} size={26} /> 
                    ),
                }}
            />
            <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                    tabBarLabel: 'Favourite',
                    tabBarIcon: ({ color }) => (
                        <Image style={{ tintColor: color }} resizeMode='contain' source={require("../assets/favourite.png")} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-circle-outline" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
            <Stack.Screen name={'Login'} component={Login} />
            <Stack.Screen name={'Register'} component={Register} />
            <Stack.Screen name={'DashBoard'} component={HomeTab} />
            <Stack.Screen name={'DetailScreen'} component={DetailScreen} />
            {/* <Stack.Screen options={{
                headerLeft: () => (
                    <Pressable style={{flexDirection:'row'}} onPress={() => navigation.navigate("Welcome")}>
                        <Icon name="left" size={20} color="#397dcf" />
                        <Text style={{color:'#397dcf'}}>Welcome</Text>
                    </Pressable>
                )
            }}/> */}

        </Stack.Navigator>
    )
}

export default Router