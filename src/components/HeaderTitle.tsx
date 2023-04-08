import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  title: string;
  avoidTop?: boolean;
  avoidBottom?: boolean;
}

export const HeaderTitle = ({title, avoidTop, avoidBottom}: Props) => {
  const {top} = useSafeAreaInsets();
  const currentStyles = currentStylesFunction(
    avoidTop ? 0 : top,
    avoidBottom ? 0 : 20,
  );

  return (
    <View style={currentStyles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const currentStylesFunction = (top: number, bottom: number) =>
  StyleSheet.create({
    header: {
      marginTop: top + 20,
      marginBottom: bottom,
    },
  });
