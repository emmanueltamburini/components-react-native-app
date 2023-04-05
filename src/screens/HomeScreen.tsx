import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

interface MenuItem {
  name: string;
  icon: string;
  component: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
];

export const HomeScreen = () => {
  const renderMenuItem = (menuItem: MenuItem): JSX.Element => {
    return (
      <View>
        <Text>{`${menuItem.name} - ${menuItem.icon}`}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => renderMenuItem(item)}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
