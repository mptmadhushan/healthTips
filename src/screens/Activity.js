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
  Picker,
  ImageBackground,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import Toast from 'react-native-simple-toast';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {data} from '../shared/test';
import SelectDropdown from 'react-native-select-dropdown';
const DetailScreen = ({navigation, route}) => {
  const [meal1, setMeal1] = useState('');
  const [grams1, setGrams1] = useState('');
  const [meal2, setMeal2] = useState('');
  const [grams2, setGrams2] = useState('');
  const [userMeal, setUserMeal] = useState([]);

  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const passwordInputRef = createRef();
  const countries = [
    'Arms',
    'Chest',
    'Belly',
    'Computer work',
    'Butt',
    'Thighs',
    'Back',
    'Legs',
  ];
  const showToast = message => {
    Toast.showWithGravity(message, Toast.SHORT, Toast.TOP);
  };
  const {resp} = route.params;
  // console.log('🚀params--<>', resp);
  useEffect(() => {
    getUserMeal();
    // AsyncStorage.clear();
  }, [userMeal]);

  const saveBreakFast = () => {
    const payload = {
      activity: [meal1, meal2, grams2, grams1],
      Water: 2000,
    };
    const newd = {...resp, ...payload};
    // console.log('🚀 newd', newd);
    // prevData.push(newd);
    const exisData = userMeal;
    const updatedData = [...exisData, newd];
    console.log('🚀 ~ updatedData', userMeal);

    storeUserMeal(updatedData);
    // navigation.navigate('MealResult', {
    //   resp: newd,
    // });
    // setLoading(true);
    // console.log(newd);
  };
  const onNext = () => {
    navigation.navigate('MealResult', {
      resp:{
        Diabetes: '77 %',
        Cholesterol: '28 %',
        Healthyness: 'You should be overweight in 7 days',
      }
    });
    // const payload = {
    //   Height: JSON.parse(userMeal).Height,
    //   Weight: JSON.parse(userMeal).Weight,
    //   IsMale: 'True',
    //   Age: JSON.parse(userMeal).Age,
    //   data: data,
    // };
    // console.log('🚀 ~ file: Activity.js:76 ~ onNext ~ payload', payload);

    // axios
    //   .post(
    //     'http://ec2-54-242-87-59.compute-1.amazonaws.com:4900/predict',
    //     payload,
    //   )
    //   .then(res => {
    //     console.log(res.data);
    //     const resData = res.data;
    //     navigation.navigate('MealResult', {
    //       resp: resData,
    //     });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     navigation.navigate('Meal');
    //   });
  };
  const storeUserMeal = async value => {
    try {
      const jsonData = JSON.stringify(value);
      // const exisData = userMeal;
      // const updatedData = [...exisData, jsonData];
      // console.log('🚀 ~ updatedData', jsonData);

      // const arr = [];
      // const newDat = arr.push(jsonData);
      // console.log('🚀 ~ updatedData', newDat);
      await AsyncStorage.setItem('@user_meal', jsonData);
      getUserMeal();
    } catch (e) {
      console.log('Error!!!!! (Handle me properly) -> ', e);
    }
  };
  const getUserMeal = async () => {
    try {
      const value = await AsyncStorage.getItem('@user_data');
      if (value !== null) {
        // console.log('🚀 ~ falue', JSON.stringify(value));
        console.log('🚀 ~ getUserMeal0 ', JSON.parse(value));
        setUserMeal(value);
        // After restoring token, we may need to validate it
        return value;
      }
    } catch (e) {
      console.log('Error!!!!! (Handle me properly) -> ', e);
    }
  };
  return (
    <ImageBackground
      source={require('../assets/images/regBg.jpeg')}
      style={styles.mainBody}>
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
          <Text style={styles.title}>Choose your problem areas</Text>

          <View style={styles.rowFlex}>
            <View style={{margin: 15}}>
              <Text style={styles.buttonTextStyle}>activity</Text>
            </View>
          </View>

          <View style={styles.rowFlex}>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonStyle={styles.inputStyle}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              buttonTextStyle={{
                color: '#fff',
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />
          </View>
          <View style={styles.rowFlex}>
            {/* <View style={styles.SectionStyle}> */}
            <TextInput
              style={[
                styles.inputStyle,
                userNameError ? styles.inputStyleError : '',
              ]}
              onChangeText={val => setGrams2(val)}
              placeholder="Time (min)"
              placeholderTextColor={COLORS.white}
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
            />
            {/* </View> */}
          </View>
          <View style={styles.rowFlex}>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonStyle={styles.inputStyle}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              buttonTextStyle={{
                color: '#fff',
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />
          </View>
          <View style={styles.rowFlex}>
            {/* <View style={styles.SectionStyle}> */}
            <TextInput
              style={[
                styles.inputStyle,
                userNameError ? styles.inputStyleError : '',
              ]}
              onChangeText={val => setGrams2(val)}
              placeholder="Time (min)"
              placeholderTextColor={COLORS.white}
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
            />
            {/* </View> */}
          </View>
          <View style={styles.rowFlex}>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonStyle={styles.inputStyle}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              buttonTextStyle={{
                color: '#fff',
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />
          </View>
          <View style={styles.rowFlex}>
            {/* <View style={styles.SectionStyle}> */}
            <TextInput
              style={[
                styles.inputStyle,
                userNameError ? styles.inputStyleError : '',
              ]}
              onChangeText={val => setGrams2(val)}
              placeholder="Time (min)"
              placeholderTextColor={COLORS.white}
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
            />
            {/* </View> */}
          </View>

          <View style={styles.centerFlex}>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => onNext()}>
              {/* onPress={() => navigation.navigate('MealLunch')}> */}
              <Text style={styles.buttonTextStyle}>Next</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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
    // marginLeft: SIZES.width * 0.1,
    alignContent: 'center',
  },
  title: {
    marginTop: -30,
    marginBottom: 40,
    color: COLORS.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
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
    borderColor: COLORS.primary,
    borderWidth: 0,
    color: COLORS.white,
    height: 40,
    width: 280,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
  },
  buttonStyle22: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
    borderWidth: 0,
    color: COLORS.white,
    height: 30,
    width: 280,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputStyle: {
    flex: 1,
    color: COLORS.white,
    paddingLeft: 5,
    backgroundColor: 'transparent',
    // paddingRight: 15,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 60,
    margin: 10,
    textAlign: 'center',
    width: SIZES.width * 0.9,
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
