import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/navigator';

interface Props {
  menuItem: MenuItem;
}

type navigationProp = StackNavigationProp<RootStackParams>;

export const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation<navigationProp>();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => navigation.navigate(menuItem.component)}>
      <Icon name={menuItem.icon} color="gray" size={23} />
      <Text style={styles.itemText}>{`${menuItem.name}`}</Text>
      <View style={styles.spacer} />
      <Icon name="chevron-forward-outline" color="gray" size={23} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
  spacer: {
    flex: 1,
  },
});
