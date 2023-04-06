import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  title: string;
}

export const HeaderTitle = ({title}: Props) => {
  const {top} = useSafeAreaInsets();
  const currentStyles = currentStylesFunction(top);

  return (
    <View style={currentStyles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const currentStylesFunction = (top: number) =>
  StyleSheet.create({
    header: {
      marginTop: top + 20,
      marginBottom: 20,
    },
  });
