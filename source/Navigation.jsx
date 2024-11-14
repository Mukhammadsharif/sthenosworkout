import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, View, Image} from 'react-native';
import {COLORS, FONTS} from './helpers/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import ProfileActiveIcon from '../source/images/profile_icon_active.png';
import ProfileInactiveIcon from '../source/images/profile_icon_inactive.png';
import HomeActiveIcon from '../source/images/home_icon_active.png';
import HomeInactiveIcon from '../source/images/home_icon_inactive.png';
import AgendaActiveIcon from '../source/images/agenda_icon_active.png';
import AgendaInactiveIcon from '../source/images/agenda_icon_inactive.png';
import Exercises from './screens/Exercises';
import Profile from './screens/Profile';
import Agenda from './screens/Agenda';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen component={TabScreen} name="TabScreen" />
        <Stack.Screen component={Exercises} name="Exercises" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TabScreen = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingHorizontal: 10,
          backgroundColor: COLORS.white,
          height: 80,
        },
        tabBarHideOnKeyboard: true,
        gestureEnabled: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? HomeActiveIcon : HomeInactiveIcon}
              style={styles.accountTabIcon}
            />
          ),
          tabBarLabel: '',
        }}
      />

      <Tab.Screen
        name="Agenda"
        component={Agenda}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? AgendaActiveIcon : AgendaInactiveIcon}
              style={styles.accountTabIcon}
            />
          ),
          tabBarLabel: '',
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? ProfileActiveIcon : ProfileInactiveIcon}
              style={styles.accountTabIcon}
            />
          ),
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  mainTabIcon: {
    width: 60,
    height: 60,
    objectFit: 'contain',
    marginTop: 10,
  },
  accountTabIcon: {
    width: 30,
    height: 30,
    objectFit: 'contain',
    marginTop: 10,
  },
  cartTabIcon: {
    width: 75,
    height: 75,
    objectFit: 'contain',
    marginTop: 10,
  },
});
