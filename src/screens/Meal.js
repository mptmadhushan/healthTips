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
  Picker,
  ImageBackground,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import Toast from 'react-native-simple-toast';
import LinearGradient from 'react-native-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown';

const DetailScreen = ({navigation}) => {
  const [meal1, setMeal1] = useState('');
  const [grams1, setGrams1] = useState(0);
  const [meal2, setMeal2] = useState('');
  const [grams2, setGrams2] = useState(0);
  const [meal3, setMeal3] = useState('');
  const [grams3, setGrams3] = useState(0);

  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const passwordInputRef = createRef();
  const countries = [
    'White rice - long-grain',
    'Dhal',
    'Potato',
    'Beans',
    'Chicken',
    'Tomato',
    'Pumpkin',
    'pork',
    'Cucumber',
    'Cabbage',
    'Egg (large)',
    'Chicken bacon',
    'Carrot',
    'Leeks',
    'Chickpeas',
    'Leeks',
    'Red grapes',
    'Dried dates',
    'Chocalate fudge',
    'Carrot juice without sugar',
    'Hoppers',
    'Strawberry ice cream',
    'Fruit cake',
    'Beetroot',
    'shrimp',
    'Baked beets',
    'Steamed carrots',
    'Pinaple',
    'Woodapple',
    'pasta',
    'Cream Cheese',
    'spaghetti',
    'String hoppers',
    'Banana',
    'corn',
  ];

  const showToast = message => {
    Toast.showWithGravity(message, Toast.SHORT, Toast.TOP);
  };
  const saveBreakFast = () => {
    const payload = {
      Breakfast: {
        Potato: grams1,
        Beans: grams2,
        Dhal: grams3,
      },
    };

    var key = `Day 26`;
    var mealData = {[key]: payload}; // same as var person = {"name" : "John"}

    console.log(mealData); // should print  Object { name="John"}

    navigation.navigate('MealLunch', {
      resp: mealData,
    });
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
          <Text style={styles.title}>Meal Plan</Text>

          <View style={styles.rowFlex}>
            <View style={{margin: 15}}>
              <Text style={styles.buttonTextStyle}>Breakfast</Text>
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
              onChangeText={val => setGrams1(val)}
              placeholder="Enter grams(1)"
              placeholderTextColor={COLORS.white}
              autoCapitalize="none"
              keyboardType="numeric"
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
              placeholder="Enter grams(2)"
              placeholderTextColor={COLORS.white}
              autoCapitalize="none"
              keyboardType="numeric"
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
              onChangeText={val => setGrams3(val)}
              placeholder="Enter grams(3)"
              placeholderTextColor={COLORS.white}
              autoCapitalize="none"
              keyboardType="numeric"
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
              onPress={() => saveBreakFast()}>
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
    borderRadius: 50,
    borderColor: COLORS.white,
    borderWidth: 1,

    height: 40,
    width: SIZES.width * 0.7,
    paddingRight: 15,
    // marginRight: 35,
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
