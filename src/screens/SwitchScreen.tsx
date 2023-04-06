import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {CustomSwitch} from '../components/CustomSwitch';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={styles.container}>
      <HeaderTitle title="Switches" />
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isActive</Text>
        <CustomSwitch
          onChange={value => onChange(value, 'isActive')}
          isOn={state.isActive}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHungry</Text>
        <CustomSwitch
          onChange={value => onChange(value, 'isHungry')}
          isOn={state.isHungry}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHappy</Text>
        <CustomSwitch
          onChange={value => onChange(value, 'isHappy')}
          isOn={state.isHappy}
        />
      </View>
      <Text style={styles.switchText}>{JSON.stringify(state, null, 3)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  switchText: {
    fontSize: 25,
    marginVertical: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
