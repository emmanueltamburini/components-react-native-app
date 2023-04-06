import React from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import prompt from 'react-native-prompt-android';

export const AlertScreen = () => {
  const showAlert = () =>
    Alert.alert(
      'Title',
      'Alert message',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('OK onDismiss'),
      },
    );

  const showPromptIOS = () => {
    Alert.prompt(
      'This is a prompt message',
      'This is a sub message',
      (value: string) => console.log('info:', value),
      'plain-text',
      'Default value',
      'number-pad',
    );
  };

  const showPrompt = () => {
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={currentStyles.container}>
      <HeaderTitle title="Alerts" />
      <Button title="Show alert" onPress={showAlert} />
      <View style={currentStyles.spacer} />
      <Button title="Show prompt" onPress={showPrompt} />
      <View style={currentStyles.spacer} />
      <Button title="Show prompt native (only IOS)" onPress={showPromptIOS} />
    </View>
  );
};

const currentStyles = StyleSheet.create({
  container: {
    flex: 1,
    ...styles.globalMargin,
  },
  spacer: {
    height: 10,
  },
});
