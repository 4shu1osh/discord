import React, { useRef, useState } from 'react';
import {TextInput} from 'react-native-paper';
import { useDispatch } from 'react-redux';
import COLORS from '../../../../utils/colors';
import styles from './styles';


export default function CustomTextInput({setFn, label, secureTextEntryValue}) {
  const onChangeText = (text) => {
    setFn(text)
    }
  return (
    <TextInput
      mode="flat"
      label={label}
      placeholderTextColor={COLORS.PRIMARY.LIGHT_GREY}
      secureTextEntry={secureTextEntryValue}
      onChangeText={onChangeText}
      theme={{
        dark:true,
        colors: {
          text: COLORS.MAIN_PALETTE.WHITE,
          primary: COLORS.PRIMARY.LIGHT_GREY,
          placeholder: COLORS.PRIMARY.LIGHT_GREY,
          background: COLORS.MAIN_PALETTE.NOT_QUITE_BLACK,
        }, 
      }}
      style={styles.input}
    />
  );
}
