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
  Button,
  ImageBackground,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import Toast from 'react-native-simple-toast';
import APIKit, {setClientToken} from '../helpers/apiKit';
import {authRegAPI} from '../api/detailsApi';

import CheckboxList from 'rn-checkbox-list';

// import DatePicker from 'react-native-date-picker';
import axios from 'axios';
const RegisterScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [amountTaken, setAmount] = useState('large amount');
  const [mealArray, setMealArray] = useState([]);
  const [mealIds, setMealIds] = useState([]);

  const [userNameError, setUserNameError] = useState(false);

  const passwordInputRef = createRef();
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  const yesno = ['yes', 'no'];
  const yesnom = ['yes', 'no', 'I’m not Aware'];
  const data = [
    {id: 10, name: 'Milk'},
    {id: 11, name: 'Dairy'},
    {id: 1, name: 'Fruit'},
    {id: 2, name: 'Citrus Fruit'},
    {id: 3, name: 'Beans'},
    {id: 4, name: 'Eggs'},
    {id: 5, name: 'Wheat'},
    {id: 6, name: 'Fish'},
    {id: 7, name: 'Corn'},
    {id: 8, name: 'Raw Vegetables'},
  ];

  const showToast = message => {
    Toast.showWithGravity(message, Toast.SHORT, Toast.TOP);
  };

  const onPressNext = () => {
    const arr2 = mealIds;
    const response = data.filter(item => arr2.includes(item.id));
    const newArr = response.map(obj => obj.name);
    console.log('🚀🗃  ~', newArr);
    setMealArray(newArr);
    navigation.navigate('Symptoms', {
      food_list: newArr,
      amount_taken: amountTaken,
    });
  };
  useEffect(() => {
    // setMealArray({});
  }, [mealArray]);

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
          // backgroundColor: 'rgba(0,0,0,0.2)',
          alignContent: 'center',
        }}>
        <KeyboardAvoidingView
          style={{padding: 40}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.centerFlex}>
            <Text style={styles.buttonTextStyle}>
              Let’s discover / suspect food and triggers
            </Text>
          </View>
          <View>
            {/* <View>
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => setOpen(true)}>
                <Text style={styles.buttonTextStye}>Pick a date</Text>
              </TouchableOpacity>
            </View> */}

            {/* <DatePicker
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
            /> */}
          </View>
          <CheckboxList
            theme="green"
            listItems={data}
            onChange={({ids}) =>
              // console.log('My updated list :: ', ids, selectedListItems)
              // onMealChange(ids)
              setMealIds(ids)
            }
            listItemStyle={{
              borderBottomColor: '#fff',
              borderBottomWidth: 1,
              textColor: '#fff',
              color: '#fff',
              padding: 20,
            }}
            checkboxProp={{boxType: 'circle'}} // iOS (supported from v0.3.0)
          />
          <View style={{margin: 20}}>
            <Text style={styles.buttonTextSty}>Apart from the above list </Text>
            <TextInput
              style={[
                styles.inputStyle,
                userNameError ? styles.inputStyleError : '',
              ]}
              onChangeText={text => setAmount(text)}
              placeholder="Amount Taken"
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
            <TextInput
              style={[
                styles.inputStyle,
                userNameError ? styles.inputStyleError : '',
              ]}
              onChangeText={amoutTaken => setAmount(amoutTaken)}
              placeholder="Food item 1"
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
            <TextInput
              style={[
                styles.inputStyle,
                userNameError ? styles.inputStyleError : '',
              ]}
              onChangeText={amoutTaken => setAmount(amoutTaken)}
              placeholder="Food item 2"
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
          <View style={styles.centerFlex}>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => onPressNext()}>
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
  },

  buttonTextStyle: {
    color: COLORS.black,
    fontSize: 25,
    marginTop: 20,
    marginLeft: 5,
    padding: 5,
    fontWeight: 'bold',

    textAlign: 'center',
  },
  buttonTextStye: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  buttonTextSty: {
    color: COLORS.black,
    margin: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
  inputStyle: {
    color: COLORS.primary,
    paddingLeft: 15,
    paddingRight: 15,
    width: SIZES.width * 0.75,
    margin: 10,
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 20,
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
