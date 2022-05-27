import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function CustomGeneralButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[props.buttonStyle, {backgroundColor: props.backgroundColor}]}>
        <Text style={props.labelStyle}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
}
