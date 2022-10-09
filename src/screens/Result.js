import React from 'react';
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
  const {resData} = route.params;
  const result = resData.result.detail;
  console.log('hello from res', resData);
  console.log(result);
  const api = {foo: 'bar', foz: 'baz'};
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/resultBG.png')}>
      <LinearGradient
        colors={['transparent', COLORS.primary, COLORS.primary]}
        style={styles.overlay}>
        <Text style={styles.title2}>{result.name}</Text>
        <View
          style={{marginTop: 20, alignItems: 'center', paddingHorizontal: 20}}>
          <Text style={styles.title}>Symptoms</Text>
          {result.symptoms &&
            result.symptoms.map(list => (
              <Text style={styles.des} key={list.index}>
                ⦿{list.symptom}
              </Text>
            ))}
          <Text style={styles.title}>Solutions</Text>

          {result.solutions &&
            result.solutions.map(list => (
              <Text style={styles.des} key={list.index}>
                ⦿{list.solution}
              </Text>
            ))}
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.btn}>
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
    marginTop: SIZES.height * 0.1,
    height: SIZES.height * 0.9,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: COLORS.third,
    height: 40,
    width: 100,
    borderRadius: 20,
    margin: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.third,
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
    color: COLORS.secondary,
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  des: {
    color: COLORS.third,
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  title2: {
    marginTop: SIZES.height * 0.3,
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
});
