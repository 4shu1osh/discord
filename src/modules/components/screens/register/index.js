import React, {useState} from 'react';
import styles from './styles';
import CustomTextInput from '../../custom/textInput';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import COLORS from '../../../../utils/colors';
import CustomGeneralButton from '../../custom/customGeneralButton';
import auth from '@react-native-firebase/auth';
import CustomSocialButton from '../../custom/socialBtn';
import ChatScreen from '../chatScreen';
import CommonFunction from '../../../../utils/CommonFunction';

export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [repass, setRepass] = useState('');
  const [err, setErr] = useState('');

  const onPressSignUp = () => {
    CommonFunction.signUpWithEmailAndPassword(
      email,
      pass,
      userDetails => {
        console.log('user-------', userDetails);
        setErr('');
      },
      signUpError => {
        setErr(signUpError);
      },
    );
  };

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
          <Text style={styles.heading}>{'Enter Details'}</Text>
          <Text style={[styles.text, {color: COLORS.PRIMARY.RED}]}>{err}</Text>
          <CustomTextInput
            label={'Email'}
            secureTextEntryValue={false}
            setFn={setEmail}
          />
          <CustomTextInput
            label={'Password'}
            secureTextEntryValue={true}
            setFn={setPass}
          />
          <CustomTextInput
            label={'Re-enter password'}
            secureTextEntryValue={true}
            setFn={setRepass}
          />
        </View>
        <Text style={[styles.text, {color: COLORS.PRIMARY.BLUE}]}>
          {'View our privacy policy'}
        </Text>

        <TouchableOpacity onPress={onPressSignUp}>
          <CustomGeneralButton
            name="Register"
            backgroundColor={COLORS.MAIN_PALETTE.BLURPLE}
          />
        </TouchableOpacity>
        <Text style={[styles.text, {marginTop: 20}]}>{'Or sign up with'}</Text>
        
      </View>
    </SafeAreaView>
  );
}
