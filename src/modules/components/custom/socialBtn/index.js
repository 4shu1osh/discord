import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';


export default function CustomSocialButton({source}) {
  return (
      <Image
        source={source}
        style={styles.socialBtn}
      />
  );
}
