import React, {useState} from 'react';
import styles from './styles';
import CustomTextInput from '../../custom/textInput';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import COLORS from '../../../../utils/colors';
import CustomGeneralButton from '../../custom/customGeneralButton';
import auth from '@react-native-firebase/auth';

export default function Login({navigation}) {

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');
  const onPressLogin = () => {

    auth()
    .createUserWithEmailAndPassword(user, pass)
    .then(() => {
      console.log('User account created & signed in!', user, pass);
      setErr('')
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        setErr('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        setErr('That email address is invalid!');
      }
      console.error(error);
    });
  
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Image
          source={require('../../../../assets/photos/left-arrow.png')}
          style={styles.backButton}
        />
        </TouchableOpacity>
        <View style={styles.alignCenter}>
          <Text style={styles.heading}>{'Welcome Back!'}</Text>
          <Text style={styles.text}>{'We are so excited to see you again'}</Text>
          <Text style={[styles.text, {color: COLORS.PRIMARY.RED}]}>{err}</Text>

          <CustomTextInput setFn={setUser} label={'Email or Phone Number'} secureTextEntryValue={false}/>
          <CustomTextInput setFn={setPass} label={'Password'} secureTextEntryValue={true} />
        </View>
        <Text style={[styles.text, {color: COLORS.PRIMARY.BLUE}]}>
          {"Forgot your password?"}
        </Text>
        <Text style={[styles.text, {color: COLORS.PRIMARY.BLUE}]}>
          {"Use a password manager?"}
        </Text>
        <TouchableOpacity onPress={onPressLogin}>
          <CustomGeneralButton name="Login" backgroundColor={COLORS.MAIN_PALETTE.BLURPLE}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
