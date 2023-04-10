import React, {useContext, useRef} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  PanResponder,
  PanResponderInstance,
} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';

export const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const {theme} = useContext(ThemeContext);
  const {colors} = theme;

  const styles = stylesFunction(colors);

  const panResponder: PanResponderInstance = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],
      {useNativeDriver: false},
    ),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: {x: 0, y: 0},
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.box]}
      />
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
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      backgroundColor: colors.primary,
      width: 150,
      height: 150,
    },
  });
