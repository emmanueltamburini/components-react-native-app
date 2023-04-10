import React, {useContext} from 'react';
import {Text, StyleSheet, StyleProp, TextStyle} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';

interface Props {
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  ignoreTheme?: boolean;
}

export const ThemeText = ({style, children, ignoreTheme}: Props) => {
  const {theme} = useContext(ThemeContext);
  const {colors} = theme;
  const currentStyles = stylesFunction(colors, style, ignoreTheme);

  return <Text style={currentStyles.text}>{children}</Text>;
};

const stylesFunction = (
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  },
  style?: StyleProp<TextStyle>,
  ignoreTheme?: boolean,
) => {
  const currentStyle = style ? style : {};
  return ignoreTheme
    ? StyleSheet.create({
        text: {
          ...(currentStyle as any),
        },
      })
    : StyleSheet.create({
        text: {
          ...(currentStyle as any),
          color: colors.text,
        },
      });
};
