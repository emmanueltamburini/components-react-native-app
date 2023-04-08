import React from 'react';
import {View, StyleSheet} from 'react-native';

export const ItemSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    opacity: 0.5,
    marginVertical: 8,
  },
});
