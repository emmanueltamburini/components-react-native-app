import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';

export const ItemSeparator = () => {
  const {theme} = useContext(ThemeContext);
  const {dividerColor} = theme;
  const styles = stylesFunction(dividerColor);

  return <View style={styles.separator} />;
};

const stylesFunction = (dividerColor: string) =>
  StyleSheet.create({
    separator: {
      borderBottomWidth: 1,
      opacity: 0.5,
      marginVertical: 8,
      borderBottomColor: dividerColor,
    },
  });
