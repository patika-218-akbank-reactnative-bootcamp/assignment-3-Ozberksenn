import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Login from './Screens/Login/Login';

import Contact from './Screens/Main/Contact/Contact';
import Messages from './Screens/Main/Messages/Messages';
import Settings from './Screens/Main/Settings/Settings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          let iconName;
          if (route.name === 'Contact') {
            iconName = focused ? 'user' : 'user';
          } else if (route.name === 'Messages') {
            iconName = focused ? 'message-circle' : 'message-circle';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings';
          }
          return <Icon name={iconName} size={size} style={{color: '#000'}} />;
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Contact" component={Contact}></Tab.Screen>
      <Tab.Screen name="Messages" component={Messages}></Tab.Screen>
      <Tab.Screen name="Settings" component={Settings}></Tab.Screen>
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;