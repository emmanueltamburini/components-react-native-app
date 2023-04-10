import React, {useEffect, useState, useRef, useContext} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageSourcePropType,
  useWindowDimensions,
  View,
  Image,
  TouchableOpacity,
  Animated,
  ViewStyle,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAnimation} from '../hooks/useAnimation';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/navigator';
import {ThemeText} from '../components/ThemeText';
import {ThemeContext} from '../context/ThemeContext';

type navigationProp = StackNavigationProp<RootStackParams>;

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Title 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Title 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Title 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

export const SlideScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const {width: screenWidth} = useWindowDimensions();
  const {opacity, fadeIn} = useAnimation();
  const fadeInStatic = useRef(fadeIn);
  const navigation = useNavigation<navigationProp>();
  const {theme} = useContext(ThemeContext);
  const {colors} = theme;

  const styles = stylesFunction(opacity, colors);

  useEffect(() => {
    if (activeIndex === items.length - 1) {
      setShowButton(true);
      fadeInStatic.current(1000);
    }
  }, [activeIndex]);

  const renderItem = (item: Slide) => {
    return (
      <View style={styles.slideContainer}>
        <Image source={item.img} style={styles.slideImageContainer} />
        <ThemeText ignoreTheme style={styles.slideTitleContainer}>
          {item.title}
        </ThemeText>
        <ThemeText style={styles.slideBodyContainer}>{item.desc}</ThemeText>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => setActiveIndex(index)}
      />
      <View style={styles.footerContainer}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={styles.dotStyle}
        />
        {showButton && (
          <Animated.View style={styles.footerFadeInButtonContainer}>
            <TouchableOpacity
              style={styles.footerButtonContainer}
              onPress={() => navigation.navigate('HomeScreen')}
              activeOpacity={0.8}>
              <ThemeText ignoreTheme style={styles.footerButtonText}>
                Enter
              </ThemeText>
              <Icon name="chevron-forward-outline" color="white" size={30} />
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
};

const stylesFunction = (
  opacity: Animated.Value,
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
      paddingTop: 50,
    },
    slideContainer: {
      flex: 1,
      backgroundColor: colors.background,
      borderRadius: 5,
      padding: 40,
      justifyContent: 'center',
    },
    slideImageContainer: {
      width: 350,
      height: 400,
      resizeMode: 'center',
    },
    slideTitleContainer: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.primary,
    },
    slideBodyContainer: {
      fontSize: 16,
    },
    dotStyle: {
      width: 10,
      height: 10,
      borderRadius: 10,
      backgroundColor: colors.primary,
    },
    footerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      alignItems: 'center',
    },
    footerButtonContainer: {
      flexDirection: 'row',
      backgroundColor: colors.primary,
      width: 140,
      height: 45,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    footerButtonText: {
      fontSize: 25,
      color: 'white',
    },
  });

  const footerFadeInButtonContainer: Animated.WithAnimatedObject<ViewStyle> = {
    opacity,
  };

  return {...styles, footerFadeInButtonContainer};
};
