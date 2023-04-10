import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useForm} from '../hooks/useForm';
import {CustomSwitch} from '../components/CustomSwitch';
import {ThemeText} from '../components/ThemeText';
import {ThemeContext} from '../context/ThemeContext';

export const TextInputsScreen = () => {
  const {theme} = useContext(ThemeContext);
  const {colors} = theme;

  const currentStyles = stylesFunction(colors);

  const {form, onChange} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribe: false,
  });

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={currentStyles.container}>
            <HeaderTitle title="TextInputs" />
            <TextInput
              style={currentStyles.textInput}
              placeholder="Enter your name"
              placeholderTextColor={colors.text}
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
            />
            <TextInput
              style={currentStyles.textInput}
              placeholder="Enter your email"
              autoCorrect={false}
              placeholderTextColor={colors.text}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
              keyboardAppearance="dark"
            />
            <TextInput
              style={currentStyles.textInput}
              placeholder="Enter your phone"
              placeholderTextColor={colors.text}
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
            />
            <View style={currentStyles.switchRow}>
              <ThemeText style={currentStyles.switchText}>Subscribe</ThemeText>
              <CustomSwitch
                onChange={value => onChange(value, 'isSubscribe')}
                isOn={form.isSubscribe}
              />
            </View>
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <View style={currentStyles.spacer} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
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
      flex: 1,
      ...styles.globalMargin,
    },
    textInput: {
      borderWidth: 1,
      opacity: 0.4,
      color: colors.text,
      borderColor: colors.text,
      height: 50,
      paddingHorizontal: 10,
      borderRadius: 10,
      marginVertical: 10,
    },
    spacer: {
      height: 100,
    },
    switchRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    switchText: {
      fontSize: 25,
      marginVertical: 10,
    },
  });
