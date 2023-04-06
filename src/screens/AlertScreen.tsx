import React from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

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

  const showPrompt = () => {
    Alert.prompt(
      'This is a prompt message',
      'This is a sub message',
      (value: string) => console.log('info:', value),
      'plain-text',
      'Default value',
      'number-pad',
    );
  };

  return (
    <View style={currentStyles.container}>
      <HeaderTitle title="Alerts" />
      <Text>AlertScreen</Text>
      <Button title="Show alert" onPress={showAlert} />
      <Button title="Show prompt" onPress={showPrompt} />
    </View>
  );
};

const currentStyles = StyleSheet.create({
  container: {
    flex: 1,
    ...styles.globalMargin,
  },
});
