import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

export default function CustomGeneralButton({backgroundColor, name}) {
  return (
      <View style={[styles.button, {backgroundColor}]}>
        <Text style={styles.label}>{name}</Text>
      </View>
  );
}
