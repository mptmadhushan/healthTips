/* eslint-disable react-native/no-inline-styles */
// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

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
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import Toast from 'react-native-simple-toast';
import APIKit, {setClientToken} from '../helpers/apiKit';
import {authRegAPI} from '../api/authRegAPI';
import SelectDropdown from 'react-native-select-dropdown';

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
  const [passwordError, setPasswordError] = useState(false);

  const passwordInputRef = createRef();
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  const yesno = ['yes', 'no'];
  const yesnom = ['yes', 'no', 'I’m not Aware'];

  const showToast = message => {
    Toast.showWithGravity(message, Toast.SHORT, Toast.TOP);
  };
  const onPressReg = () => {
    navigation.navigate('BMI');
    const payload = {
      username: userName,
      email: userEmail,
      password: userPassword,
      roles: ['user'],
    };

    setLoading(true);
    console.log(payload);
    authRegAPI(payload)
      .then(response => {
        if (response.error) {
          console.log('error__<', response.error);
          showToast('try again');
          return;
        }
        const {data} = response;
        console.log('res', response.data);
        console.log('token', data.access);
      })
      .catch(error => {
        console.log('error-->', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <ImageBackground
      style={styles.mainBody}
      source={require('../assets/images/regBg.jpeg')}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          width: SIZES.width,
          alignItems: 'center',
          alignContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.centerFlex}>
            <Text style={styles.buttonTextStyle}>
              Let’s get to know about you!
            </Text>
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
            <Text style={styles.buttonTextStyle}>
              Do you have food allergies to any food item?
            </Text>
          </View>
          <View style={styles.rowFlex}>
            <View style={styles.SectionStyle}>
              <SelectDropdown
                dropdownStyle={{minWidth: SIZES.width * 0.7}}
                data={yesnom}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonStyle={{minWidth: SIZES.width * 0.7}}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            </View>
          </View>
          <View style={styles.rowFlex}>
            <Text style={styles.buttonTextStyle}>How old are you?</Text>
          </View>
          <View style={styles.rowFlex}>
            <View style={styles.SectionStyle}>
              <SelectDropdown
                dropdownStyle={{minWidth: SIZES.width * 0.7}}
                data={countries}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonStyle={{minWidth: SIZES.width * 0.7}}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            </View>
          </View>
          <View style={styles.rowFlex}>
            <Text style={styles.buttonTextStyle}>
              Family History on food allergies?
            </Text>
          </View>
          <View style={styles.rowFlex}>
            <View style={styles.SectionStyle}>
              <SelectDropdown
                dropdownStyle={{minWidth: SIZES.width * 0.7}}
                data={yesno}
                buttonStyle={{minWidth: SIZES.width * 0.7}}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            </View>
          </View>
          <View style={styles.rowFlex}>
            <Text style={styles.buttonTextStyle}>
              Do you have allergies to drugs?
            </Text>
          </View>
          <View style={styles.rowFlex}>
            <View style={styles.SectionStyle}>
              <SelectDropdown
                dropdownStyle={{minWidth: SIZES.width * 0.7}}
                data={yesno}
                buttonStyle={{minWidth: SIZES.width * 0.7}}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            </View>
          </View>

          <View style={styles.centerFlex}>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => {
                navigation.navigate('SuspectFood');
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
    marginTop: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontSize: 15,
    marginTop: 20,
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
});
