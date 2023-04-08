import React, {useState} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {FadeInImage} from '../components/FadeInImage';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);
  const renderItemFunction = (item: number) => (
    <FadeInImage
      style={styles.item}
      uri={`https://picsum.photos/id/${item}/500/400`}
    />
  );

  const renderFooterFunction = () => (
    <View style={styles.footerContainer}>
      <ActivityIndicator size={25} color="#5856D6" />
    </View>
  );

  const renderHeaderFunction = () => (
    <View style={styles.headerContainer}>
      <HeaderTitle title="Infinite Scroll" />
    </View>
  );

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={numbers}
        renderItem={({item}) => renderItemFunction(item)}
        keyExtractor={item => item.toString()}
        ListHeaderComponent={renderHeaderFunction}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooterFunction}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginVertical: 15,
  },
  item: {
    width: '100%',
    height: 400,
  },
  footerContainer: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
