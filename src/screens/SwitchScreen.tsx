import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {CustomSwitch} from '../components/CustomSwitch';
import {ThemeText} from '../components/ThemeText';

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
        <ThemeText style={styles.switchText}>isActive</ThemeText>
        <CustomSwitch
          onChange={value => onChange(value, 'isActive')}
          isOn={state.isActive}
        />
      </View>
      <View style={styles.switchRow}>
        <ThemeText style={styles.switchText}>isHungry</ThemeText>
        <CustomSwitch
          onChange={value => onChange(value, 'isHungry')}
          isOn={state.isHungry}
        />
      </View>
      <View style={styles.switchRow}>
        <ThemeText style={styles.switchText}>isHappy</ThemeText>
        <CustomSwitch
          onChange={value => onChange(value, 'isHappy')}
          isOn={state.isHappy}
        />
      </View>
      <ThemeText style={styles.switchText}>
        {JSON.stringify(state, null, 3)}
      </ThemeText>
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
