import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MenuItem} from '../interfaces/appInterfaces';
import {FlatListMenuItem} from '../components/FlatListMenuItem';

const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const currentStyles = currentStylesFunction(top);

  const renderHeader = (): JSX.Element => {
    return (
      <View style={currentStyles.header}>
        <Text style={styles.title}>Menu options</Text>
      </View>
    );
  };

  const renderSeparator = (): JSX.Element => {
    return <View style={currentStyles.separator} />;
  };

  return (
    <View style={currentStyles.container}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={renderHeader}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

const currentStylesFunction = (top: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      ...styles.globalMargin,
    },
    header: {
      marginTop: top + 20,
      marginBottom: 20,
    },
    separator: {
      borderBottomWidth: 1,
      opacity: 0.5,
      marginVertical: 8,
    },
  });
