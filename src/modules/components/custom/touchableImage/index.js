import {Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function TouchableImage(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image source={props.source} style={props.style} />
    </TouchableOpacity>
  );
}
