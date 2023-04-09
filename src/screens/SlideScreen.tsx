import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ImageSourcePropType,
  useWindowDimensions,
  View,
  Image,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

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
  const {height: screenHeight, width: screenWidth} = useWindowDimensions();

  const renderItem = (item: Slide) => {
    return (
      <View style={styles.slideContainer}>
        <Image source={item.img} style={styles.slideImageContainer} />
        <Text style={styles.slideTitleContainer}>{item.title}</Text>
        <Text style={styles.slideBodyContainer}>{item.desc}</Text>
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
      <Pagination
        dotsLength={items.length}
        activeDotIndex={activeIndex}
        dotStyle={styles.dotStyle}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  slideContainer: {
    flex: 1,
    backgroundColor: 'white',
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
    color: '#5856D6',
  },
  slideBodyContainer: {
    fontSize: 16,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#5856D6',
  },
});
