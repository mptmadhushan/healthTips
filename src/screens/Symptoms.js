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
  Button,
  ImageBackground,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import Toast from 'react-native-simple-toast';
import APIKit, {setClientToken} from '../helpers/apiKit';
import {authRegAPI} from '../api/authRegAPI';

import CheckboxList from 'rn-checkbox-list';

import DatePicker from 'react-native-date-picker';

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
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const passwordInputRef = createRef();
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  const yesno = ['yes', 'no'];
  const yesnom = ['yes', 'no', 'I’m not Aware'];
  const data = [
    {id: 1, name: 'Itchy mouth'},
    {id: 2, name: 'Funny taste in your mouth'},
    {id: 3, name: 'uneven heartbeat'},
    {id: 4, name: 'diarrhea'},
    {id: 5, name: 'swallowing'},
    {id: 6, name: 'Swollen lips'},
    {id: 7, name: 'Swollen tongue, or throat'},
  ];
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
      source={require('../assets/images/arBg.jpeg')}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          width: SIZES.width,
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.centerFlex}>
            <Text style={styles.buttonTextStyle}>
              Let’s Track your Symptoms
            </Text>
          </View>
          <View>
            <View style={styles.centerFlex}>
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => setOpen(true)}>
                <Text style={styles.buttonTextStye}>Pick a date</Text>
              </TouchableOpacity>
            </View>

            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
          <CheckboxList
            theme="red"
            listItems={data}
            onChange={({ids, items}) => console.log('My updated list :: ', ids)}
            listItemStyle={{
              borderBottomColor: '#fff',
              borderBottomWidth: 1,
              textColor: '#fff',
              color: '#fff',
            }}
            checkboxProp={{boxType: 'square'}}
          />
          <View style={styles.centerFlex}>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('AlleResult')}>
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
  buttonTextStyle: {
    color: COLORS.secondary,
    fontSize: 25,
    marginTop: 20,
    marginLeft: 5,
    padding: 5,
    fontWeight: 'bold',
    textAlign: 'center',
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
