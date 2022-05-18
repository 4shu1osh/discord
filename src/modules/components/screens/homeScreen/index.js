import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import CustomTextInput from '../../custom/textInput';
import CustomGeneralButton from '../../custom/customGeneralButton';
import styles from '../register/styles';
import COLORS from '../../../../utils/colors';

export default function Home(navigation) {
  const [roomName, setRoomName] = useState('');
  const [threads, setThreads] = useState([])
  const [loading, setLoading] = useState(true)

  function handleButtonPress() {
    if (roomName.length > 0) {
      firestore()
        .collection('Rooms')
        .add({
          name: roomName,
        })
        .then(() => {
          navigation.navigate('FeedStack');
        })
        .catch((err)=> {
            console.log(err, "---")
        })
    }
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
      </View>
    </SafeAreaView>
  );
}
