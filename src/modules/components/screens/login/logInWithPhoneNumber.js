import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import CustomTextInput from '../../custom/textInput';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import COLORS from '../../../../utils/colors';
import CustomGeneralButton from '../../custom/customGeneralButton';
import CommonFunction from '../../../../utils/CommonFunction';


export default function LogInWithPhoneNumber({navigation}) {

  const [confirm, setConfirm] = useState(null);
  const [err, setErr] = useState('')
  const [code, setCode] = useState('');
  const [phone, setPhone] = useState('')

 const onPressLogin = () => {
   CommonFunction.logInWithPhoneNumber(
     phone,
     confirmation => {
       console.log("confirm----", confirmation)
       setConfirm(confirmation)
     },
     loginError => {
       setErr(loginError)
     }
   )
 }

  function confirmCode() {
    CommonFunction.confirmCode(
      code,
      confirm,
      ()=>  navigation.navigate("Home"),
      error=> setErr(error)
    )
  }

  if (!confirm) {
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
          <Text style={styles.heading}>{'Welcome Back!'}</Text>
          <Text style={styles.text}>
            {'We are so excited to see you again'}
          </Text>
          <Text style={[styles.text, {color: COLORS.PRIMARY.RED}]}>{err}</Text>
          <CustomTextInput
            setFn={setPhone}
            label={'Phone Number'}
            secureTextEntryValue={false}
          />
           <Text style={styles.text}>
            {'Example: +91 1234567890'}
          </Text>
        </View>
        <TouchableOpacity onPress={onPressLogin}>
          <CustomGeneralButton
            name="Send OTP"
            backgroundColor={COLORS.MAIN_PALETTE.BLURPLE}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    );
  }

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
        <Text style={styles.heading}>{'Verify OTP'}</Text>
          <Text style={[styles.text, {color: COLORS.PRIMARY.RED}]}>{err}</Text>
          <CustomTextInput
            setFn={setCode}
            label={'Enter OTP'}
            secureTextEntryValue={false}
          />
        </View>
        <TouchableOpacity onPress={confirmCode}>
          <CustomGeneralButton
            name="Confirm"
            backgroundColor={COLORS.MAIN_PALETTE.BLURPLE}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}