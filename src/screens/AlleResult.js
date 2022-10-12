import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import LinearGradient from 'react-native-linear-gradient';
export default function OnBoard({navigation}) {
  const [respo, setRespo] = useState({
    Diabetes: '77 %',
    Cholesterol: '28 %',
    Healthyness: 'You should be overweight in 7 days',
  });
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
        <TouchableOpacity disabled e={styles.btn}>
          <Text style={styles.btnText}>Food Type:Sea Food</Text>
        </TouchableOpacity>
        <TouchableOpacity disabled style={styles.btn}>
          <Text style={styles.btnText}>Food Item :Fish</Text>
        </TouchableOpacity>
        <Text style={styles.title}>You might be diagnosed with</Text>

        <TouchableOpacity disabled style={styles.btn}>
          <Text style={styles.btnText}>Histamine Allergy</Text>
        </TouchableOpacity>
        <Text style={styles.title}>
          Try eliminating the above food type/ item from your meal plan for 2
          days while seeking medical help as soon as possible
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HealthTips');
          }}
          style={styles.btn}>
          Continue to track food items
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
    marginTop: SIZES.height * 0.2,
    // backgroundColor: 'rgba(255,0,0,0.5)',
    height: SIZES.height * 0.8,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: COLORS.primary,
    height: 40,
    width: 200,
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
  },
  title: {
    color: COLORS.black,
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  title2: {
    marginTop: SIZES.height * 0.3,
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
});
