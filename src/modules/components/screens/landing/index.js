import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomButton from '../../custom/button';
import COLORS from '../../../../utils/colors';

export default function LandingPage({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          source={require('../../../../assets/photos/background.png')}
          style={styles.backgroundImg}
        />
        <CustomButton navigation={navigation} backgroundColor={COLORS.MAIN_PALETTE.BLURPLE} name={"Login"} />
        <CustomButton navigation={navigation} backgroundColor={COLORS.PRIMARY.GREY} name={"Register"} />
      </View>
    </SafeAreaView>
  );
}
