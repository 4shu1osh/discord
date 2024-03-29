import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

export default function CustomButton({navigation, backgroundColor, name}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate({name})}>
      <View style={[styles.button, {backgroundColor}]}>
        <Text style={styles.label}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
