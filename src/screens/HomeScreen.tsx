import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {styles} from '../theme/appTheme';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {menuItems} from '../data/menuItem';
import {HeaderTitle} from '../components/HeaderTitle';

export const HomeScreen = () => {
  const currentStyles = currentStylesFunction();

  const renderSeparator = (): JSX.Element => {
    return <View style={currentStyles.separator} />;
  };

  return (
    <View style={currentStyles.container}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={<HeaderTitle title="Menu options" />}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

const currentStylesFunction = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      ...styles.globalMargin,
    },
    separator: {
      borderBottomWidth: 1,
      opacity: 0.5,
      marginVertical: 8,
    },
  });
