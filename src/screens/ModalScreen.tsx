import React, {useContext, useState} from 'react';
import {View, StyleSheet, Button, Modal} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ThemeText} from '../components/ThemeText';
import {ThemeContext} from '../context/ThemeContext';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {theme} = useContext(ThemeContext);
  const {colors} = theme;

  const currentStyles = stylesFunction();

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <View style={currentStyles.container}>
      <HeaderTitle title="Modal Screen" />
      <Button color={colors.primary} title="Open Modal" onPress={openModal} />
      <Modal animationType="fade" visible={isVisible} transparent>
        <View style={currentStyles.modalContainer}>
          <View style={currentStyles.modalContent}>
            <ThemeText ignoreTheme style={currentStyles.modalTitle}>
              Modal
            </ThemeText>
            <ThemeText ignoreTheme style={currentStyles.modalBody}>
              Modal Body
            </ThemeText>
            <Button
              color={colors.primary}
              title="Close Modal"
              onPress={closeModal}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const stylesFunction = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      ...styles.globalMargin,
    },
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: 'white',
      width: 200,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      elevation: 10,
      borderRadius: 5,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
    modalBody: {
      fontSize: 16,
      fontWeight: '300',
      marginBottom: 20,
      color: 'black',
    },
  });
