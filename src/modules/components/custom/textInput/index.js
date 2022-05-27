import React from 'react';
import styles from './styles';
import COLORS from '../../../../utils/colors';
import {TextInput, Text} from 'react-native-paper';


export default function CustomTextInput(props) {
  return (
    <>
      <Text style={styles.errMsg}>{props.error}</Text>
      <TextInput
        {...props}
        mode="flat"
        placeholderTextColor={COLORS.PRIMARY.LIGHT_GREY}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        theme={{
          dark: true,
          colors: {
            text: COLORS.MAIN_PALETTE.WHITE,
            primary: COLORS.PRIMARY.LIGHT_GREY,
            placeholder: COLORS.PRIMARY.LIGHT_GREY,
            background: COLORS.MAIN_PALETTE.NOT_QUITE_BLACK,
            error: COLORS.MAIN_PALETTE.RED
          },
        }}
        style={styles.input}
      />
    </>
  );
}
