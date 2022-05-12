import React from 'react';
import {TextInput} from 'react-native-paper';

export default function CustomTextInput(props) {
  return (
    <TextInput
      mode="outlined"
      label="Outlined input"
      placeholder="Type something"
      right={<TextInput.Affix text="/100" />}
    />
  );
}
