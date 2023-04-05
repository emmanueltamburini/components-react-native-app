import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  ViewStyle,
  Button,
  Easing,
} from 'react-native';

export const Animation101Screen = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const top = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log('FadeIn animation finished'));

    Animated.timing(top, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start(() => console.log('top animation finished'));
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log('FadeOut animation finished'));

    Animated.timing(top, {
      toValue: -100,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => console.log('top animation finished'));
  };

  const styles = stylesFunction(opacity, top);

  return (
    <View style={styles.container}>
      <Animated.View style={styles.purpleBox} />
      <Button title="Fade in" onPress={fadeIn} />
      <Button title="Fade out" onPress={fadeOut} />
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
