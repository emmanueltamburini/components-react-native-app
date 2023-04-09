import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/navigator';
import {useTheme} from '@react-navigation/native';

interface Props {
  menuItem: MenuItem;
}

type navigationProp = StackNavigationProp<RootStackParams>;

export const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation<navigationProp>();
  const {colors} = useTheme();
  const styles = stylesFunction(colors);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => navigation.navigate(menuItem.component)}>
      <Icon name={menuItem.icon} color="#5856D6" size={23} />
      <Text style={styles.itemText}>{`${menuItem.name}`}</Text>
      <View style={styles.spacer} />
      <Icon name="chevron-forward-outline" color="#5856D6" size={23} />
    </TouchableOpacity>
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
      flexDirection: 'row',
      flex: 1,
    },
    itemText: {
      marginLeft: 10,
      fontSize: 19,
      color: colors.text,
    },
    spacer: {
      flex: 1,
    },
  });
