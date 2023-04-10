import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/ThemeContext';
import {ThemeText} from '../components/ThemeText';

export const ChangeThemeScreen = () => {
  const {setDarkTheme, setLightTheme, theme} = useContext(ThemeContext);
  const {colors} = theme;
  const currentStyles = stylesFunction(colors);

  return (
    <View style={currentStyles.container}>
      <HeaderTitle title="Theme" />
      <View style={currentStyles.buttonContainer}>
        <TouchableOpacity
          style={currentStyles.button}
          activeOpacity={0.8}
          onPress={setLightTheme}>
          <ThemeText style={currentStyles.text} ignoreTheme>
            Light
          </ThemeText>
        </TouchableOpacity>
        <TouchableOpacity
          style={currentStyles.button}
          activeOpacity={0.8}
          onPress={setDarkTheme}>
          <ThemeText style={currentStyles.text} ignoreTheme>
            Dark
          </ThemeText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const stylesFunction = (colors: {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      ...styles.globalMargin,
    },
    button: {
      backgroundColor: colors.primary,
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
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
