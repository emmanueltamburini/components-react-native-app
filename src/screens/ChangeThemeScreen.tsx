import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';
import {HeaderTitle} from '../components/HeaderTitle';

export const ChangeThemeScreen = () => {
  return (
    <View style={currentStyles.container}>
      <HeaderTitle title="Theme" />
      <TouchableOpacity style={currentStyles.button} activeOpacity={0.8}>
        <Text style={currentStyles.text}>Light / Dark</Text>
      </TouchableOpacity>
    </View>
  );
};

const currentStyles = StyleSheet.create({
  container: {
    flex: 1,
    ...styles.globalMargin,
  },
  button: {
    backgroundColor: '#5856D6',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 20,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
  },
});
