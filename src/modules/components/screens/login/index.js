import React, {useState} from 'react';
import styles from './styles';
import CustomTextInput from '../../custom/textInput';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import COLORS from '../../../../utils/colors';
import CustomGeneralButton from '../../custom/customGeneralButton';
import CommonFunction from '../../../../utils/CommonFunction';
import CustomSocialButton from '../../custom/socialBtn';
import {NativeModules} from 'react-native';
const {RNTwitterSignIn} = NativeModules;
export default function Login({navigation}) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');

  const onPressGoogleSignIn = () => {
    CommonFunction.logInWithGoogle(
      ()=> {
        console.log("Signed in Google")
        navigation.navigate("Home")
      },
      error => {
        console.log("error google sign in")
      }
    )
  }

  const onPressTwitterSignIn = () => {

RNTwitterSignIn.init(
  'ApdafLLPINlv5HR79PGoNmege',
  'hDHOYKeqOPQhwj0IJ1dkPLTOXq90TeC03IicdWTebwvvn3syH8',
).then(() => console.log('Twitter SDK initialized'));

    CommonFunction.logInWithTwitter(
      data=> {
        console.log("Signed in Twitter", data)
        navigation.navigate("Home")
      },
      error => {
        console.log("error twitter sign in", error)
      }
    )
  }

  const onPressFacebookSignIn = () => {
    CommonFunction.logInWithFacebook(
      userDetails=> {
        console.log("Signed in Facebook", userDetails)
        navigation.navigate("Home")
      },
      error => {
        console.log("error google sign in")
      }
    )
  }

  const onPressLogin = () => {
    CommonFunction.logInWithEmailAndPassword(
      user,
      pass,
      userDetails => {
        setErr('');
        navigation.navigate('Home');
      },
      loginError => {
        setErr(loginError);
      },
    );
  };

  const onPressLoginAnonymously = () => {
    CommonFunction.logInAnonymously(
      userDetails => {
        navigation.navigate('Home');
      },
      loginError => {
        setErr(loginError);
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
          <Text style={styles.heading}>{'Welcome Back!'}</Text>
          <Text style={styles.text}>
            {'We are so excited to see you again'}
          </Text>
          <Text style={[styles.text, {color: COLORS.PRIMARY.RED}]}>{err}</Text>
          <CustomTextInput
            setFn={setUser}
            label={'Email'}
            secureTextEntryValue={false}
          />
          <CustomTextInput
            setFn={setPass}
            label={'Password'}
            secureTextEntryValue={true}
          />
        </View>
        <Text style={[styles.text, {color: COLORS.PRIMARY.BLUE}]}>
          {'Forgot your password?'}
        </Text>
        <Text style={[styles.text, {color: COLORS.PRIMARY.BLUE}]}>
          {'Use a password manager?'}
        </Text>
        <TouchableOpacity onPress={onPressLogin}>
          <CustomGeneralButton
            name="Login"
            backgroundColor={COLORS.MAIN_PALETTE.BLURPLE}
          />
        </TouchableOpacity>
        <Text style={[styles.text, {alignSelf: 'center'}]}>OR</Text>
        <View style={styles.rowStyle}>
          <TouchableOpacity
            onPress={onPressGoogleSignIn}>
            <CustomSocialButton
              source={require('../../../../assets/photos/google.png')}
            />
            {/* <Text>ashutosh</Text> */}
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressFacebookSignIn}>
            <CustomSocialButton
              source={require('../../../../assets/photos/fb.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressTwitterSignIn}>
            <CustomSocialButton
              source={require('../../../../assets/photos/twitter.png')}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onPressLoginAnonymously}>
          <CustomGeneralButton
            name="Login anonymously"
            backgroundColor={COLORS.MAIN_PALETTE.NOT_QUITE_BLACK}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
/*
  const logInWithPhoneNumber = () => {
    CommonFunction.logInWithPhoneNumber(
    phone,
    userDetails => {
      console.log(first)
    },
    loginError => {
      setErr(loginError)
    }
    )

  } 
*/
