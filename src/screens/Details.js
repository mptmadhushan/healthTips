/* eslint-disable react-native/no-inline-styles */
// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Platform,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {detailsApi} from '../api/detailsApi';
import axios from 'axios';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import Toast from 'react-native-simple-toast';
import CheckBox from '@react-native-community/checkbox';
const DetailScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [bmi, setBMI] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');

  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [drugAl, setToggleDrug] = useState(false);
  const [allergies, setAllergies] = useState(false);
  const [toggleFamily, setToggleCheckBox] = useState(false);

  const passwordInputRef = createRef();
  useEffect(() => {}, [bmi]);

  const data = [
    'Teacher',
    'Nurse',
    'Police Officer',
    'Construction work',
    'Farming',
    'Desk job',
  ];
  const showToast = message => {
    Toast.showWithGravity(message, Toast.SHORT, Toast.TOP);
  };

  const onNext = () => {
    const payload = {
      Height: height,
      Weight: weight,
      IsMale: 'True',
      Age: age,
    };

    setLoading(true);
    console.log(payload);
    axios
      .post(
        'http://ec2-54-242-87-59.compute-1.amazonaws.com:4900/predict',
        payload,
        {
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4ODM1MjQzLCJqdGkiOiIxNjAwODQ2MDE0MjI0MzY4ODYyM2YzY2YyZDQ2OTYyNiIsInVzZXJfaWQiOjF9.I9FHtw4WJP2Cz8Xhs8kJ1OYUVUm_cl0kBdX4i9G8Su4`,
          },
        },
      )
      .then(res => {
        console.log(res.data);
        navigation.navigate('Meal');
      })
      .catch(err => {
        console.log(err);
      });
    // detailsApi(payload)
    //   .then(response => {
    //     if (response.error) {
    //       console.log('error__<', response.error);
    //       showToast('try again');
    //       return;
    //     }
    //     const {data} = response;
    //     console.log('res', response.data);
    //     console.log('token', data.access);
    //     navigation.navigate('Login');
    //   })
    //   .catch(error => {
    //     console.log('error-->', error);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };
  const getBMI = () => {
    let bmiRes = weight / (height * height);
    console.log('🚀 ~ file: Details.js:87 ~ getBMI ~ bmi', bmiRes);
    setBMI(bmiRes);
    return bmiRes;
  };
  return (
    <ImageBackground
      source={require('../assets/images/arBg.jpeg')}
      style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          alignContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}>
        <Text style={styles.title}>Enter your Details</Text>
        {/* allergiesallergies */}
        <View style={styles.rowFlex}>
          <View style={styles.SectionStyle}>
            <TextInput
              style={[
                styles.inputStyle,
                userNameError ? styles.inputStyleError : '',
              ]}
              onChangeText={UserName => setAge(UserName)}
              placeholder="Age"
              placeholderTextColor={COLORS.white}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
            />
          </View>
        </View>
        <View style={styles.rowFlex}>
          <View style={styles.SectionStyle}>
            <TextInput
              style={[
                styles.inputStyle,
                userNameError ? styles.inputStyleError : '',
              ]}
              onChangeText={UserName => setHeight(UserName)}
              placeholder="height in m2"
              placeholderTextColor={COLORS.white}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
            />
          </View>
        </View>
        <View style={styles.rowFlex}>
          <View style={styles.SectionStyle}>
            <TextInput
              style={[
                styles.inputStyle,
                userNameError ? styles.inputStyleError : '',
              ]}
              onChangeText={UserName => setWeight(UserName)}
              placeholder="Weight in kg"
              placeholderTextColor={COLORS.white}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
            />
          </View>
        </View>
        <View style={styles.rowFlex}>
          <View style={styles.SectionStyle}>
            <TextInput
              style={[
                styles.inputStyle,
                userNameError ? styles.inputStyleError : '',
              ]}
              onChangeText={UserName => setGender(UserName)}
              placeholder="Gender"
              placeholderTextColor={COLORS.white}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
            />
          </View>
        </View>
        <View style={styles.rowFlex}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              // tintColors={{'white' }}
              disabled={false}
              value={toggleFamily}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text style={styles.label}>Family History</Text>
          </View>
        </View>
        <View style={styles.rowFlex}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              disabled={false}
              value={drugAl}
              style={{
                color: 'white',
              }}
              onValueChange={newValue => setToggleDrug(newValue)}
            />
            <Text style={styles.label}>Drug Allergy</Text>
          </View>
        </View>
        <View style={styles.rowFlex}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              disabled={false}
              value={allergies}
              style={{
                color: 'white',
              }}
              onValueChange={newValue => setAllergies(newValue)}
            />
            <Text style={styles.label}>Allergies</Text>
          </View>
        </View>
        {/* <View style={styles.rowFlex}>
          <View style={styles.SectionStyle}>
            <TextInput
              style={[
                styles.inputStyle,
                userNameError ? styles.inputStyleError : '',
              ]}
              onChangeText={UserName => setUserName(UserName)}
              placeholder="Jobs"
              placeholderTextColor={COLORS.white}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
            />
          </View>
        </View> */}
        <View style={styles.centerFlex}>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => getBMI()}>
            <Text style={styles.buttonTextStyle}>Done</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 35}} />
        <View style={styles.rowFlex}>
          <View style={styles.SectionStyle}>
            <TextInput
              style={[
                styles.inputStyle,
                userNameError ? styles.inputStyleError : '',
              ]}
              onChangeText={UserName => setUserName(UserName)}
              placeholder="Your BMI Value"
              placeholderTextColor={COLORS.white}
              autoCapitalize="none"
              keyboardType="email-address"
              disabled
              value={bmi}
              defaultValue={bmi}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
            />
          </View>
        </View>
        {/* <View style={styles.rowFlex}>
          <View style={styles.SectionStyle}>
            <TextInput
              style={[
                styles.inputStyle,
                userNameError ? styles.inputStyleError : '',
              ]}
              disabled
              onChangeText={UserName => setUserName(UserName)}
              placeholder="Your daily needs"
              placeholderTextColor={COLORS.white}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
            />
          </View>
        </View> */}
        <View style={styles.centerFlex}>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => onNext()}>
            <Text style={styles.buttonTextStyle}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default DetailScreen;

const styles = StyleSheet.create({
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  buttonTextStyle2: {
    color: COLORS.secondary,

    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'right',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: SIZES.width * 0.3,
  },
  rowFlex: {
    flexDirection: 'row',
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: SIZES.width * 0.1,
    alignContent: 'center',
  },
  title: {
    color: COLORS.black,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 15,
    fontSize: 22,
  },
  mainBody: {
    // backgroundColor: '#FAFAFA',
    flex: 1,
    // alignItems: 'flex-end',
    justifyContent: 'center',
  },
  SectionStyle: {
    // backgroundColor: COLORS.secondary,
    borderRadius: 10,
    borderColor: COLORS.white,
    borderWidth: 1,
    height: 40,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: COLORS.primary,
    borderWidth: 0,
    color: COLORS.white,
    height: 40,
    width: 130,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputStyle: {
    flex: 1,
    color: COLORS.third,
    paddingLeft: 15,
    paddingRight: 15,
    width: SIZES.width * 0.7,
  },
  inputStyleError: {
    flex: 1,
    color: COLORS.third,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'red',
    paddingLeft: 15,
    paddingRight: 15,
    width: SIZES.width * 0.7,
  },
  registerTextStyle: {
    color: '#4c5a5b',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  checkboxContainer: {
    flexDirection: 'row',
    // marginBottom: 10,
    width: SIZES.width * 0.7,
    justifyContent: 'space-between',
  },
  label: {
    margin: 8,
    color: 'white',
    padding: 5,
  },
});
