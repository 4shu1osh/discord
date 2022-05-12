import React from 'react';
import styles from './styles';
import CustomTextInput from '../../custom/textInput';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import COLORS from '../../../../utils/colors';
import CustomGeneralButton from '../../custom/customGeneralButton';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import CustomSocialButton from '../../custom/socialBtn';

const onPressLogin = () => {
  alert('Hello');
};

export default function Register({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../../assets/photos/left-arrow.png')}
            style={styles.backButton}
          />
        </TouchableOpacity>
        <View style={styles.alignCenter}>
          <Text style={styles.heading}>{'Enter phone or email!'}</Text>
          <CustomTextInput
            label={'Phone Number'}
            secureTextEntryValue={false}
          />
        </View>
        <Text style={[styles.text, {color: COLORS.PRIMARY.BLUE}]}>
          {'View our privacy policy'}
        </Text>

        <TouchableOpacity onPress={onPressLogin}>
          <CustomGeneralButton
            name="Next"
            backgroundColor={COLORS.MAIN_PALETTE.BLURPLE}
          />
        </TouchableOpacity>
        <Text style={[styles.text, {marginTop: 20}]}>{'Or sign up with'}</Text>
        <View style={styles.rowStyle}>
        <CustomSocialButton source={require('../../../../assets/photos/google.png')}/>
        <CustomSocialButton source={require('../../../../assets/photos/fb.png')}/>
         <CustomSocialButton source={require('../../../../assets/photos/twitter.png')}/>
        </View>
      </View>
    </SafeAreaView>
  );
}
