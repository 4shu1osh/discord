import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomButton from '../../custom/button';
import COLORS from '../../../../utils/colors';

export default function LandingPage() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          source={require('../../../../assets/photos/background.png')}
          style={styles.backgroundImg}
        />
        <CustomButton backgroundColor={COLORS.MAIN_PALETTE.BLURPLE} name={"Register"} />
        <CustomButton backgroundColor={COLORS.PRIMARY.GREY} name={"Login"} />
      </View>
    </SafeAreaView>
  );
}
