import * as Yup from 'yup';
import styles from './styles';
import {Formik} from 'formik';
import React, {useState} from 'react';
import COLORS from '../../../../utils/colors';
import CustomTextInput from '../../custom/textInput';
import {View, Text, SafeAreaView} from 'react-native';
import TouchableImage from '../../custom/touchableImage';
import CommonFunction from '../../../../utils/CommonFunction';
import CustomGeneralButton from '../../custom/customGeneralButton';

/**
 * @function validationSchema
 * @description Validation of User info input
 */

const validationSchema = Yup.object({
  fullName: Yup.string().trim().min(3, 'Name is too short!'),
  phoneNumber: Yup.number()
    .min(1000000000, 'Phone no. must be 10 digits')
    .max(9999999999, 'Phone no. must be 10 digits'),
  email: Yup.string().email('Invalid email!').required('Email is required!'),
  password: Yup.string()
    .trim()
    .min(8, 'Password is too short!')
    .required('Password is required!'),
  confirmPassword: Yup.string()
    .min(8)
    .equals([Yup.ref('password'), null], 'Password does not match!'),
});

const userInfo = {
  email: '',
  fullName: '',
  password: '',
  phoneNumber: '',
  confirmPassword: '',
};

/**
 * @function Register
 * @description Calls the sign up method with 4 params 
 * - email, password, successCallback and failureCallback
 * @param {*} naviagtion
 */

export default function Register({navigation}) {
  const [err, setErr] = useState('');

  const onPressSignUp = (email, password) => {
    CommonFunction.signUpWithEmailAndPassword(
      email,
      password,
      userDetails => {
        setErr('');
        navigation.navigate('Home');
      },
      signUpError => {
        setErr(signUpError);
      },
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableImage
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          source={require('../../../../assets/photos/left-arrow.png')}
        />
        <View style={styles.alignCenter}>
          <Text style={styles.heading}>{'Enter Details'}</Text>
          <Text style={[styles.text, {color: COLORS.PRIMARY.RED}]}>{err}</Text>
          <Formik initialValues={userInfo} validationSchema={validationSchema}>
            {({values, errors, touched, handleChange, handleBlur}) => {
              const {fullName, email, password, phoneNumber, confirmPassword} =
                values;
              return (
                <>
                  <CustomTextInput
                    value={fullName}
                    label={'Full Name (Optional)'}
                    onBlur={handleBlur('fullName')}
                    onChangeText={handleChange('fullName')}
                    error={touched.fullName && errors.fullName}
                  />
                  <CustomTextInput
                    value={phoneNumber}
                    label={'Phone Number (Optional)'}
                    onBlur={handleBlur('phoneNumber')}
                    onChangeText={handleChange('phoneNumber')}
                    error={touched.phoneNumber && errors.phoneNumber}
                  />
                  <CustomTextInput
                    value={email}
                    label={'Email'}
                    onBlur={handleBlur('email')}
                    onChangeText={handleChange('email')}
                    error={touched.email && errors.email}
                  />
                  <CustomTextInput
                    value={password}
                    label={'Password'}
                    secureTextEntry={true}
                    onBlur={handleBlur('password')}
                    onChangeText={handleChange('password')}
                    error={touched.password && errors.password}
                  />
                  <CustomTextInput
                    secureTextEntry={true}
                    value={confirmPassword}
                    label={'Re-enter password'}
                    onBlur={handleBlur('confirmPassword')}
                    onChangeText={handleChange('confirmPassword')}
                    error={touched.confirmPassword && errors.confirmPassword}
                  />
                  <CustomGeneralButton
                    name="Register"
                    labelStyle={styles.label}
                    buttonStyle={styles.button}
                    backgroundColor={COLORS.MAIN_PALETTE.BLURPLE}
                    onPress={() => onPressSignUp(email, password)}
                  />
                </>
              );
            }}
          </Formik>
        </View>
      </View>
    </SafeAreaView>
  );
}
