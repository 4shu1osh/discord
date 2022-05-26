import React, {useState} from 'react';
import styles from './styles';
import CustomTextInput from '../../custom/textInput';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import COLORS from '../../../../utils/colors';
import CustomGeneralButton from '../../custom/customGeneralButton';
import CommonFunction from '../../../../utils/CommonFunction';
import {Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  fullName: Yup.string()
    .trim()
    .min(3, 'Name is too short!')
    .required('Name is required!'),
  phoneNumber: Yup.number('must be numeric value')
    .min(1000000000, 'Phone no. must be 10 digits')
    .max(9999999999, 'Phone no. must be 10 digits'),
  email: Yup.string().email('Invalid email!').required('Email is required!'),
  password: Yup.string()
    .trim()
    .min(8, 'Password is too short!')
    .required('Password is required!'),
  confirmPassword: Yup.string().equals(
    [Yup.ref('password'), null],
    'Password does not match!',
  ),
});

const userInfo = {
  fullName: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
};

export default function Register({navigation}) {
  const [err, setErr] = useState('');

  const onPressSignUp = (email, password) => {
    CommonFunction.signUpWithEmailAndPassword(
      email,
      password,
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
          <Formik initialValues={userInfo} validationSchema={validationSchema}>
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => {
              const {fullName, email, password, phoneNumber, confirmPassword} =
                values;
              return (
                <>
                  <CustomTextInput
                    value={fullName}
                    label={'Full Name'}
                    error={touched.fullName && errors.fullName}
                    onChangeText={handleChange('fullName')}
                    onBlur={handleBlur('fullName')}
                  />
                  <CustomTextInput
                    value={phoneNumber}
                    label={'Phone Number'}
                    error={touched.phoneNumber && errors.phoneNumber}
                    onBlur={handleBlur('phoneNumber')}
                    onChangeText={handleChange('phoneNumber')}
                    d
                  />
                  <CustomTextInput
                    value={email}
                    label={'Email'}
                    error={touched.email && errors.email}
                    onBlur={handleBlur('email')}
                    onChangeText={handleChange('email')}
                  />
                  <CustomTextInput
                    value={password}
                    label={'Password'}
                    error={touched.password && errors.password}
                    onBlur={handleBlur('password')}
                    onChangeText={handleChange('password')}
                    secureTextEntry={true}
                  />
                  <CustomTextInput
                    value={confirmPassword}
                    label={'Re-enter password'}
                    error={touched.confirmPassword && errors.confirmPassword}
                    onBlur={handleBlur('confirmPassword')}
                    onChangeText={handleChange('confirmPassword')}
                    secureTextEntry={true}
                  />
                  {password != confirmPassword ? (
                    <CustomGeneralButton
                      name="Register"
                      backgroundColor={COLORS.PRIMARY.DARK_GREY}
                    />
                  ) : (
                    <TouchableOpacity
                      onPress={() => onPressSignUp(email, password)}>
                      <CustomGeneralButton
                        name="Register"
                        backgroundColor={COLORS.MAIN_PALETTE.BLURPLE}
                      />
                    </TouchableOpacity>
                  )}
                </>
              );
            }}
          </Formik>
        </View>
        <Text style={[styles.text, {color: COLORS.PRIMARY.BLUE}]}>
          {'View our privacy policy'}
        </Text>
      </View>
    </SafeAreaView>
  );
}
