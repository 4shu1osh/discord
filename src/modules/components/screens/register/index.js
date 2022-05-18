import React from 'react';
import styles from './styles';
import CustomTextInput from '../../custom/textInput';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import COLORS from '../../../../utils/colors';
import CustomGeneralButton from '../../custom/customGeneralButton';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import CustomSocialButton from '../../custom/socialBtn';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import ChatScreen from '../chatScreen';

const onPressLogin = () => {
  alert('Hello');
};
async function onFacebookButtonPress() {
  LoginManager.logOut();
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]).then(console.log('results stored'));
  console.log('result', result);
  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(
    data.accessToken,
  );

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
}

GoogleSignin.configure({
  webClientId:
    '645700229771-mum9dmsc0hivp4hmc8bueuravnsnv9hq.apps.googleusercontent.com',
});
async function onGoogleButtonPress() {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}
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
          <TouchableOpacity
            onPress={() =>
              onGoogleButtonPress().then(() => {
                navigation.navigate('ChatScreen');
                console.log('Signed in with Google!');
              })
            }>
            <CustomSocialButton
              source={require('../../../../assets/photos/google.png')}
            />
            {/* <Text>ashutosh</Text> */}
          </TouchableOpacity>
          <TouchableOpacity onPress={onFacebookButtonPress}>
            <CustomSocialButton
              source={require('../../../../assets/photos/fb.png')}
            />
          </TouchableOpacity>

          <CustomSocialButton
            source={require('../../../../assets/photos/twitter.png')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
