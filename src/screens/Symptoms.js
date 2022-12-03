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
import {addAllergy} from '../api/addAllergy';

import CheckboxList from 'rn-checkbox-list';

// import DatePicker from 'react-native-date-picker';

const RegisterScreen = ({route, navigation}) => {
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
  const [sympIds, setSympIds] = useState([]);
  const [symp, setSymp] = useState([]);

  const data = [
    {id: 1, name: 'Hives or a rash anywhere on the body'},
    {id: 2, name: 'Dizziness or lightheadedness'},
    {id: 3, name: 'uneven heartbeat'},
    {id: 4, name: 'Cramping'},
    {
      id: 6,
      name: 'Tingling or itching in the mouthTingling or itching in the mouth',
    },
    {id: 7, name: 'Stomach pains'},
    {id: 8, name: 'Swollen lips'},
    {id: 9, name: 'Swollen tongue, or throat'},
    {id: 10, name: 'stomach pains'},
    {id: 11, name: 'Cramping'},
    {id: 12, name: 'Gas'},
    {id: 13, name: 'Dizziness or lightheadedness'},
  ];
  const {food_list, amount_taken} = route.params;
  console.log(
    '🚀 ~ file: Symptoms.js:63 ~ RegisterScreen ~ itemId, otherParam',
    food_list,
    amount_taken,
  );
  const showToast = message => {
    Toast.showWithGravity(message, Toast.SHORT, Toast.TOP);
  };

  const onPressNext = () => {
    const arr2 = sympIds;
    const resp = data.filter(item => arr2.includes(item.id));
    const newArr = resp.map(obj => obj.name);
    console.log('🚀🗃 ', newArr);

    var bodyFormData = new FormData();
    bodyFormData.append('amount_taken', amount_taken);
    bodyFormData.append('symptoms_list', JSON.stringify(newArr));
    bodyFormData.append('food_list', JSON.stringify(food_list));

    console.log('🚀 ~ file: Symptoms.js:87= payload', bodyFormData);
    addAllergy(bodyFormData)
      .then(response => {
        if (response.error) {
          console.log('error__<', response.error);
          showToast('try again');
          return;
        }
        const respo = response.data;
        console.log('res', respo);
        navigation.navigate('AlleResult', {
          resp: respo,
        });
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

          <CheckboxList
            theme="green"
            listItems={data}
            onChange={({ids, items}) => setSympIds(ids)}
            listItemStyle={{
              borderBottomColor: '#fff',
              borderBottomWidth: 1,
              textColor: '#fff',
              color: '#fff',
              padding: 20,
            }}
            checkboxProp={{boxType: 'square'}}
          />
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
  buttonTextStyle: {
    color: COLORS.black,
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20,
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
    marginBottom: 20,
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
