import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {Animation101Screen} from '../screens/Animation101Screen';
import {Animation102Screen} from '../screens/Animation102Screen';
import {SwitchScreen} from '../screens/SwitchScreen';
import {AlertScreen} from '../screens/AlertScreen';
import {TextInputsScreen} from '../screens/TextInputsScreen';
import {PullToRefreshScreen} from '../screens/PullToRefreshScreen';
import {SectionListScreen} from '../screens/SectionListScreen';
import {ModalScreen} from '../screens/ModalScreen';
import {InfiniteScrollScreen} from '../screens/InfiniteScrollScreen';
import {SlideScreen} from '../screens/SlideScreen';
import {ChangeThemeScreen} from '../screens/ChangeThemeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext} from '../context/ThemeContext';

export type RootStackParams = {
  HomeScreen: undefined;
  Animation101Screen: undefined;
  Animation102Screen: undefined;
  SwitchScreen: undefined;
  AlertScreen: undefined;
  TextInputsScreen: undefined;
  PullToRefreshScreen: undefined;
  SectionListScreen: undefined;
  ModalScreen: undefined;
  InfiniteScrollScreen: undefined;
  SlideScreen: undefined;
  ChangeThemeScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="Animation101Screen"
          component={Animation101Screen}
        />
        <Stack.Screen
          name="Animation102Screen"
          component={Animation102Screen}
        />
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="TextInputsScreen" component={TextInputsScreen} />
        <Stack.Screen
          name="PullToRefreshScreen"
          component={PullToRefreshScreen}
        />
        <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
        <Stack.Screen
          name="InfiniteScrollScreen"
          component={InfiniteScrollScreen}
        />
        <Stack.Screen name="SlideScreen" component={SlideScreen} />
        <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
