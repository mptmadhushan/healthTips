/* eslint-disable react-native/no-inline-styles */
// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-updateUser-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
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
import {updateUser} from '../api/updateUser';
import CheckBox from '@react-native-community/checkbox';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import Toast from 'react-native-simple-toast';
import APIKit, {setClientToken} from '../helpers/apiKit';
// import {authRegAPI} from '../api/authRegAPI';
import SelectDropdown from 'react-native-select-dropdown';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
const RegisterScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [job, setJob] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [userNameError, setUserNameError] = useState(false);

  const [foodAlg, setFoodAlg] = useState(false);

  const [sex, setSex] = useState(false);

  const [famFood, setFamFood] = useState(false);

  const [drug, setDrug] = useState(false);

  const [toggleFamily, setToggleCheckBox] = useState(false);

  const passwordInputRef = createRef();
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  const yesno = ['yes', 'no'];
  const yesnom = ['yes', 'no', 'I’m not Aware'];
  const yesnsex = ['Male', 'Female'];
  const yesnoage = [
    'Infant / Toodlers (0-5 yrs)',
    'Infant / Toodlers (0-5 yrs)',
    'Infant / Toodlers (0-5 yrs)',
  ];

  const showToast = message => {
    Toast.showWithGravity(message, Toast.SHORT, Toast.TOP);
  };
  const onPressSend = () => {
    navigation.navigate('SuspectFood');
    const payload = {
      age: age,
      sex: 'male',
      allergies: foodAlg,
      family_history: famFood,
      drug_allergies: drug,
    };
    var bodyFormData = new FormData();
    bodyFormData.append('age', age);
    bodyFormData.append('sex', 'male');
    bodyFormData.append('allergies', foodAlg);
    bodyFormData.append('family_history', famFood);
    bodyFormData.append('drug_allergies', drug);

    console.log(
      '🚀 ~ file: MoreUserData.js:73 ~ onPressSend ~ data',
      bodyFormData,
    );
    updateUser(bodyFormData)
      .then(response => {
        if (response.error) {
          console.log('error__<', response.error);
          showToast('try again');
          return;
        }
        const {data} = response;
        console.log('res', response.data);

        navigation.navigate('SuspectFood');
      })
      .catch(error => {
        console.log('error-->', error);
        navigation.navigate('SuspectFood');

        // showToast(error.responses);
      })
      .finally(() => {
        setLoading(false);
      });
    // axios
    //   .post('http://127.0.0.1:8000/api/v1.0/user/', data, {
    //     headers: {
    //       Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4ODM1MjQzLCJqdGkiOiIxNjAwODQ2MDE0MjI0MzY4ODYyM2YzY2YyZDQ2OTYyNiIsInVzZXJfaWQiOjF9.I9FHtw4WJP2Cz8Xhs8kJ1OYUVUm_cl0kBdX4i9G8Su4`,
    //     },
    //   })
    //   .then(res => {
    //     console.log(res.data);
    //     navigation.navigate('SuspectFood');
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     navigation.navigate('SuspectFood');
    //   });
  };
  return (
    <ImageBackground
      style={styles.mainBody}
      source={require('../assets/images/arBg.jpeg')}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          width: SIZES.width,
          alignItems: 'center',
          alignContent: 'center',
          // backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.centerFlex}>
            <Text style={styles.title}>Let’s get to know{'\n'} about you!</Text>
          </View>
          <View style={styles.rowFlex}>
            <Text style={styles.buttonTextStyle}>Whats your name?</Text>
          </View>
          <View style={styles.rowFlex}>
            <View style={styles.SectionStyle}>
              <TextInput
                style={[
                  styles.inputStyle,
                  userNameError ? styles.inputStyleError : '',
                ]}
                onChangeText={UserName => setUserName(UserName)}
                placeholder="User Name"
                placeholderTextColor={COLORS.black}
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
            <Text style={styles.buttonTextStyle}>
              Do you have food allergies to any food item?
            </Text>
          </View>
          <View style={styles.rowFlex}>
            <View style={styles.rowFlex}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  // tintColors={{'white' }}
                  disabled={false}
                  value={foodAlg}
                  onValueChange={() => setFoodAlg(!foodAlg)}
                />
                <Text style={styles.label}>Yes</Text>
                <CheckBox
                  // tintColors={{'white' }}
                  disabled={false}
                  value={!foodAlg}
                  onValueChange={() => setFoodAlg(!foodAlg)}
                />
                <Text style={styles.label}>No</Text>
              </View>
            </View>
          </View>
          <View style={styles.rowFlex}>
            <Text style={styles.buttonTextStyle}>How old are you?</Text>
          </View>
          <View style={styles.rowFlex}>
            <View style={styles.SectionStyle}>
              <TextInput
                style={[
                  styles.inputStyle,
                  userNameError ? styles.inputStyleError : '',
                ]}
                onChangeText={age => setAge(age)}
                placeholder="Age"
                placeholderTextColor={COLORS.black}
                autoCapitalize="none"
                keyboardType="phone-pad"
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
            <Text style={styles.buttonTextStyle}>Your sex?</Text>
          </View>
          <View style={styles.rowFlex}>
            {/* <View style={styles.SectionStyle}> */}
            <View style={styles.rowFlex}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  // tintColors={{'white' }}
                  disabled={false}
                  value={sex}
                  onValueChange={() => setSex(!sex)}
                />
                <Text style={styles.label}>Male</Text>
                <CheckBox
                  // tintColors={{'white' }}
                  disabled={false}
                  value={!sex}
                  onValueChange={() => setSex(!sex)}
                />
                <Text style={styles.label}>Female</Text>
              </View>
            </View>
          </View>
          {/* </View> */}
          <View style={styles.rowFlex}>
            <Text style={styles.buttonTextStyle}>
              Family History on food allergies?
            </Text>
          </View>
          <View style={styles.rowFlex}>
            {/* <View style={styles.SectionStyle}> */}
            <View style={styles.rowFlex}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  // tintColors={{'white' }}
                  disabled={false}
                  value={famFood}
                  onValueChange={() => setFamFood(!famFood)}
                />
                <Text style={styles.label}>Yes</Text>
                <CheckBox
                  // tintColors={{'white' }}
                  disabled={false}
                  value={!famFood}
                  onValueChange={() => setFamFood(!famFood)}
                />
                <Text style={styles.label}>No</Text>
              </View>
            </View>
          </View>
          <View style={styles.rowFlex}>
            <Text style={styles.buttonTextStyle}>
              Do you have allergies to drugs?
            </Text>
          </View>
          <View style={styles.rowFlex}>
            {/* <View style={styles.SectionStyle}> */}
            <View style={styles.rowFlex}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  // tintColors={{'white' }}
                  disabled={false}
                  value={drug}
                  onValueChange={newValue => setDrug(!drug)}
                />
                <Text style={styles.label}>Yes</Text>
                <CheckBox
                  // tintColors={{'white' }}
                  disabled={false}
                  value={!drug}
                  onValueChange={() => setDrug(!drug)}
                />
                <Text style={styles.label}>No</Text>
              </View>
            </View>
          </View>
          <View style={styles.centerFlex}>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => {
                onPressSend();
              }}>
              <Text style={styles.buttonTextStye}>Next</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </ImageBackground>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  buttonTextStyle2: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: SIZES.width * 0.3,
  },
  title: {
    color: COLORS.black,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  rowFlex: {
    flexDirection: 'row',
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: SIZES.width * 0.1,
    alignContent: 'center',
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
    borderColor: COLORS.primary,
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
    marginTop: 10,
  },
  buttonTextStyle: {
    color: '#111',
    fontSize: 15,
    marginTop: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  buttonTextStye: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  buttonTextSty: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  inputStyle: {
    flex: 1,
    color: COLORS.third,
    paddingLeft: 35,
    paddingRight: 15,
    width: SIZES.width * 0.7,
    backgroundColor: 'white',
    borderRadius: 30,
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
    marginBottom: 10,
    marginTop: 10,
    // width: SIZES.width * 0.7,
    justifyContent: 'space-around',
  },
  label: {
    // margin: 8,
    color: '#111',
    padding: 5,
  },
});
