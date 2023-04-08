import React, {useState} from 'react';
import {
  StyleSheet,
  Animated,
  View,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    fadeIn(1000);
    setIsLoading(false);
  };

  const styles = stylesFunction(opacity, style);
  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator
          style={styles.activityIndicator}
          size={30}
          color="#5856D6"
        />
      )}
      <Animated.Image
        source={{uri}}
        style={styles.image}
        onLoadEnd={finishLoading}
      />
    </View>
  );
};

const stylesFunction = (
  opacity: Animated.Value,
  style?: StyleProp<ImageStyle>,
) => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    activityIndicator: {
      position: 'absolute',
    },
  });

  const image = {
    width: '100%',
    height: 400,
    ...(style as any),
    opacity,
  };

  return {...styles, image};
};
