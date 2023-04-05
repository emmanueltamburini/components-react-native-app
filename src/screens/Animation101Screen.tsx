import React from 'react';
import {View, StyleSheet, Animated, ViewStyle, Button} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {opacity, position, fadeIn, fadeOut, startMoving, goToPosition} = useAnimation();

  const styles = stylesFunction(opacity, position);

  return (
    <View style={styles.container}>
      <Animated.View style={styles.purpleBox} />
      <Button
        title="Fade in"
        onPress={() => {
          fadeIn();
          startMoving(-100, 1000);
        }}
      />
      <Button
        title="Fade out"
        onPress={() => {
          fadeOut();
          goToPosition(-100, 1000);
        }}
      />
    </View>
  );
};

const stylesFunction = (opacity: Animated.Value, top: Animated.Value) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  const purpleBox: Animated.WithAnimatedObject<ViewStyle> = {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
    opacity,
    transform: [{translateY: top}],
    marginBottom: 20,
  };

  return {...styles, purpleBox};
};
