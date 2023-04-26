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
export default function OnBoard({navigation, route}) {
  const {resp} = route.params;
  // const [respo, setRespo] = useState({
  //   Diabetes: '77 %',
  //   Cholesterol: '28 %',
  //   Healthyness: 'You should be overweight in 7 days',
  // });

  const getData=()=>{
     axios
      .post(
        'http://localhost:3002/api',
        payload,
        {
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4ODM1MjQzLCJqdGkiOiIxNjAwODQ2MDE0MjI0MzY4ODYyM2YzY2YyZDQ2OTYyNiIsInVzZXJfaWQiOjF9.I9FHtw4WJP2Cz8Xhs8kJ1OYUVUm_cl0kBdX4i9G8Su4`,
          },
        },
      )
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/arBg.jpeg')}>
      <LinearGradient colors={['transparent', 'white']} style={styles.overlay}>
        <Text style={styles.title2}>{resp.Healthyness}</Text>
        {/* <Text style={styles.title}> {resp.Cholesterol}</Text> */}

        <TouchableOpacity disabled style={styles.btn}>
          <Text style={styles.btnText}>Cholesterol :{resp.Cholesterol}</Text>
        </TouchableOpacity>
        <TouchableOpacity disabled style={styles.btn}>
          <Text style={styles.btnText}>Diabetes :{resp.Diabetes}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HealthTips');
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>Done</Text>
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
    marginTop: SIZES.height * 0.2,
    marginBottom: SIZES.height * 0.1,
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
});
