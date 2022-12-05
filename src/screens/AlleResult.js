import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Linking,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import LinearGradient from 'react-native-linear-gradient';
export default function OnBoard({route, navigation}) {
  const {resp} = route.params;
  console.log('🚀 ~ file: AlleResult.js:14 ~ OnBoard ~ resp', resp);
  const [respo, setRespo] = useState(resp);
  const foodsToSend = {
    amount_taken: 'Large Amount',
    symptoms_list: [
      'Hives or a rash anywhere on the body',
      'Tingling or itching in the mouth',
      'Stomach pains',
      'Cramping',
      'Gas',
      'Dizziness or lightheadedness',
    ],
    food_list: ['Dairy', 'Fruit', 'Citrus Fruit', 'Beans'],
  };
  useEffect(() => {
    axios
      .post('http://127.0.0.1:8000/api/v1.0/allergy/', foodsToSend, {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4ODM1MjQzLCJqdGkiOiIxNjAwODQ2MDE0MjI0MzY4ODYyM2YzY2YyZDQ2OTYyNiIsInVzZXJfaWQiOjF9.I9FHtw4WJP2Cz8Xhs8kJ1OYUVUm_cl0kBdX4i9G8Su4`,
        },
      })
      .then(res => {
        console.log(res.data);
        setRespo(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/arBg.jpeg')}>
      <LinearGradient colors={['transparent', 'white']} style={styles.overlay}>
        <Text style={styles.title2}>
          Looks like you have been diagnosed with a food allergy!
        </Text>
        <Text style={styles.title}>
          The Food Type/Item that caused the Food Allergy is/are;
        </Text>

        <TouchableOpacity disabled style={styles.btn}>
          <Text style={styles.btnText}>{resp.predicted_food_type}</Text>
        </TouchableOpacity>
        {resp.possible_allergens.length > 0 && (
          <Text style={styles.titleNew}>Possible Allergens</Text>
        )}

        {resp.possible_allergens.map(x => (
          <TouchableOpacity disabled style={styles.btn}>
            <Text style={styles.btnText}>{x}</Text>
          </TouchableOpacity>
        ))}
        {resp.references.length > 0 && (
          <Text style={styles.titleNew}>References</Text>
        )}
        {resp.references.map(x => (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              Linking.openURL(x.url);
            }}>
            <Text style={styles.btnText}>{x.url.substring(0, 30)}...</Text>
          </TouchableOpacity>
        ))}
        <Text style={styles.titleNew}>You might be diagnosed with</Text>

        <TouchableOpacity disabled style={styles.btn}>
          <Text style={styles.btnText}>{resp.predicted_allergy}</Text>
        </TouchableOpacity>
        <Text style={[styles.title, {marginTop: 20}]}>
          Try eliminating the above food type item from your meal plan for 2
          days while seeking medical help as soon as possible
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('OnBoard');
          }}
          style={[styles.btn, {marginTop: 20}]}>
          <Text style={styles.btnText}>Home</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    flex: 1,
  },
  overlay: {
    marginTop: SIZES.height * 0.05,
    // backgroundColor: 'rgba(255,0,0,0.5)',
    height: SIZES.height * 0.9,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: COLORS.primary,
    height: 40,
    width: '90%',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowOpacity: 0.98,
    shadowRadius: 16.0,
    elevation: 24,
  },
  btnText: {
    color: COLORS.white,
    fontWeight: '200',
    fontSize: 20,
  },
  title: {
    color: COLORS.black,
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  titleNew: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    // marginLeft: -120,
    marginTop: 10,
  },
  title2: {
    marginTop: SIZES.height * 0.02,
    marginBottom: SIZES.height * 0.05,
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 25,
    padding: 10,
    textAlign: 'center',
  },
});
