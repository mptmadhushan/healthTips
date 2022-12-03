import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import LinearGradient from 'react-native-linear-gradient';
import sec1 from '../assets/sec1.jpg';
import sec2 from '../assets/sec2.jpg';
import sec3 from '../assets/sec3.jpg';
import sec4 from '../assets/sec4.jpg';
import axios from 'axios';
import {storeUserToken, getUserToken} from '../shared/asyncStorage';
import {setClientToken} from '../shared/axios';
import {getUser} from '../api/getUser.js';
export default function OnBoard({navigation}) {
  useEffect(() => {
    setClientToken('token');
    getUser()
      .then(response => {
        if (response.error) {
          console.log('error__<', response.error);
          return;
        }
        const {data} = response;
        console.log('res', response.data);
        console.log('token', data.accessToken);

        // navigation.navigate('Home');
      })
      .catch(error => {
        console.log('error-->', error);
        // showToast(error.responses);
      })
      .finally(() => {});
  }, []);
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/arBg.jpeg')}>
      {/* <LinearGradient
      colors={[COLORS.black, COLORS.primary, COLORS.black]}
      style={styles.mainBody}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      locations={[0, 0.7, 0.9]}> */}
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <Text style={styles.title2}>
          Let's predict your future health and consequences
        </Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Details')}>
          <View style={styles.centerFlex}>
            <Image
              source={sec1}
              resizeMode="cover"
              style={{
                width: '100%',
                marginTop: -4,
                height: SIZES.height * 0.2,
              }}
            />
            <Text style={styles.title}>
              predicting non-communicable deceases and obesity and recommencing
              health tips.
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('MoreUserData')}>
          <View style={styles.centerFlex}>
            <Image
              source={sec4}
              resizeMode="cover"
              style={{
                width: '100%',
                marginTop: -4,
                height: SIZES.height * 0.2,
              }}
            />
            <Text style={styles.title}>
              Start tracking food items and symptoms
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.centerFlex}>
          <Image
            source={sec2}
            resizeMode="cover"
            style={{
              width: '100%',
              marginTop: -4,
              height: SIZES.height * 0.2,
            }}
          />
          <Text style={styles.title}>View previously saved drafts</Text>
        </View>

        <View style={styles.centerFlex}>
          <Image
            source={sec3}
            resizeMode="cover"
            style={{
              width: '100%',
              marginTop: -4,
              height: SIZES.height * 0.2,
            }}
          />
          <Text style={styles.title}>
            Ingredient tracking and allergy free recipes
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    flex: 1,
  },
  overlay: {
    // marginTop: SIZES.height * 0.4,
    // backgroundColor: 'rgba(255,0,0,0.5)',
    height: SIZES.height,
    alignItems: 'center',
  },
  btn: {
    marginTop: SIZES.height * 0.06,
    backgroundColor: COLORS.primary,
    height: 40,
    width: 100,
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
  centerFlex: {
    backgroundColor: COLORS.primary,
    width: SIZES.width * 0.8,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 20,
  },
  title: {
    color: COLORS.white,
    fontSize: 18,
    // marginTop: SIZES.height * 0.06,
    textAlign: 'center',
    paddingHorizontal: 10,
    margin: 12,
  },
  title2: {
    marginTop: SIZES.height * 0.05,
    marginBottom: SIZES.height * 0.05,
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
});
