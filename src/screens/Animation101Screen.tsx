import React, {useContext} from 'react';
import {View, StyleSheet, Animated, ViewStyle, Button} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
import {ThemeContext} from '../context/ThemeContext';

export const Animation101Screen = () => {
  const {opacity, position, fadeIn, fadeOut, startMoving, goToPosition} =
    useAnimation();

  const {theme} = useContext(ThemeContext);
  const {colors} = theme;

  const styles = stylesFunction(opacity, position, colors);

  return (
    <View style={styles.container}>
      <Animated.View style={styles.box} />
      <Button
        title="Fade in"
        color={colors.primary}
        onPress={() => {
          fadeIn();
          startMoving(-100, 1000);
        }}
      />
      <View style={styles.spacer} />
      <Button
        title="Fade out"
        color={colors.primary}
        onPress={() => {
          fadeOut();
          goToPosition(-100, 1000);
        }}
      />
    </View>
  );
};

const stylesFunction = (
  opacity: Animated.Value,
  top: Animated.Value,
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  },
) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    spacer: {
      height: 10,
    },
  });

  const box: Animated.WithAnimatedObject<ViewStyle> = {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
    opacity,
    transform: [{translateY: top}],
    marginBottom: 20,
  };

  return {...styles, box};
};
