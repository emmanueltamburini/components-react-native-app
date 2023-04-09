import {DarkTheme, NavigationContainer, Theme} from '@react-navigation/native';
import React from 'react';
import {Navigator} from './src/navigator/navigator';

export const App = () => {
  const customTheme: Theme = {
    dark: true,
    colors: {
      ...DarkTheme.colors,
    },
  };

  return (
    <NavigationContainer theme={customTheme}>
      <Navigator />
    </NavigationContainer>
  );
};
