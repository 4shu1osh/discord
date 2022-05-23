import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import CustomTextInput from '../../custom/textInput';
import CustomGeneralButton from '../../custom/customGeneralButton';
import styles from '../register/styles';
import COLORS from '../../../../utils/colors';
import CommonFunction from '../../../../utils/CommonFunction';

export default function Home({navigation}) {
  const [roomName, setRoomName] = useState('');
  const [err, setErr] = useState('')

  const onPressLogOut = () => {
    CommonFunction.logoutWithFirebase(
      logoutSuccess => {
        navigation.navigate('LandingPage');
      },
      logoutError => {
        console.log("log out err", logoutError)
        setErr(logoutError);
      },
    );
  };

  function handleButtonPress() {
    if (roomName.length > 0) {
      firestore()
        .collection('Rooms')
        .add({})
        .then(() => {
          navigation.navigate('FeedStack');
        })
        .catch((err)=> {
            console.log(err, "---")
        })
        const room = firestore().collection('Rooms').get()
        console.log("room", room)
    }
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.alignCenter}>
          <Text style={styles.heading}>{'Add Room'}</Text>
          <CustomTextInput
            setFn={setRoomName}
            label={'Room Name'}
            secureTextEntryValue={false}
          />
        </View>

        <TouchableOpacity onPress={handleButtonPress}>
          <CustomGeneralButton
            name="ADD"
            backgroundColor={COLORS.MAIN_PALETTE.BLURPLE}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressLogOut}>
          <CustomGeneralButton
            name="Log out"
            backgroundColor={COLORS.MAIN_PALETTE.BLURPLE}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
