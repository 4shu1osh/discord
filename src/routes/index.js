import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from '../modules/components/screens/landing';
import Login from '../modules/components/screens/login';
import Register from '../modules/components/screens/register';
import Home from '../modules/components/screens/homeScreen';
import COLORS from '../utils/colors';
import styles from './styles'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Friends from '../modules/components/screens/friends';
import Search from '../modules/components/screens/search';
import Mentions from '../modules/components/screens/mentions';
import Profile from '../modules/components/screens/profile';
import { Image } from 'react-native';
import ChatScreen from '../modules/components/screens/chatScreen';
import LogInWithPhoneNumber from '../modules/components/screens/login/logInWithPhoneNumber';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Login With Phone Number" component={LogInWithPhoneNumber} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FeedStack" component={FeedStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function FeedStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.MAIN_PALETTE.DARK_BUT_NOT_BLACK,
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/photos/discord.png')}
                style={focused ? styles.activeIcon : styles.icon}
              />
            );
          },
        }}
      />
      <Tab.Screen name="Friends" component={Friends}  options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/photos/friends.png')}
                style={focused ? styles.activeIcon : styles.icon}
              />
            );
          },
        }} />
      <Tab.Screen name="Search" component={Search}  options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/photos/search-icon.png')}
                style={focused ? styles.activeIcon : styles.icon}
              />
            );
          },
        }} />
      <Tab.Screen name="Mentions" component={Mentions}  options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/photos/arroba.png')}
                style={focused ? styles.activeIcon : styles.icon}
              />
            );
          },
        }} />
      <Tab.Screen name="Profile" component={Profile}  options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../assets/photos/model.png')}
                style={focused ? styles.activeIcon : styles.icon}
              />
            );
          },
        }} />
    </Tab.Navigator>
  );
}
