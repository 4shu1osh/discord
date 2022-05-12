import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

export default function CustomButton({backgroundColor, name}) {
  return (
    <View style={[styles.button, {backgroundColor}]}>
      <Text style={styles.label}>{name}</Text>
    </View>
  )
}