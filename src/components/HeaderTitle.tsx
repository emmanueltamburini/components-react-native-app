import React from 'react';
import {View, StyleSheet} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeText} from './ThemeText';

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
      <ThemeText style={styles.title}>{title}</ThemeText>
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
