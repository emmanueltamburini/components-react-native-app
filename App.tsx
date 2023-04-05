import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Navigator} from './src/navigator/navigator';

export const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};
