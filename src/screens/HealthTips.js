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
  const result = [
    {
      name: 'Healthy Tip : 1',
      des: 'There is a good chance that the sit-up was one of the first exercises you learned in grade school. It’s simple, but it still works. The crunch is considered a more popular choice because it’s supposed to isolate the upper abs more, ',
    },
    {
      name: 'Healthy Tip : 2',
      des: 'The basic lying leg raise is a classic way to train the lower abs. It works, but there is a better method that can also help promote balance.',
    },
    {
      name: 'Healthy Tip : 3',
      des: 'The most neglected part of ab training is the obliques. This is because of the myth that if you train them, then your waist will get bigger. ',
    },
  ];

  const api = {foo: 'bar', foz: 'baz'};
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/arBg.jpeg')}>
      <LinearGradient
        colors={['transparent', COLORS.primary, COLORS.primary]}
        style={styles.overlay}>
        <View
          style={{
            marginTop: 50,
            marginBottom: 10,
            alignItems: 'center',
            paddingHorizontal: 30,
          }}>
          <Text style={styles.title}>
            You can follow the following HealthTips to prevent these diseases
            and obesity
          </Text>
          {result &&
            result.map(list => (
              <Text style={styles.des} key={list.index}>
                ⦿ {list.name}
                {'\n'}⦿{list.des}
              </Text>
            ))}
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MoreUserData');
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
    marginTop: SIZES.height * 0.0,
    height: SIZES.height * 1,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: COLORS.secondary,
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
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
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
