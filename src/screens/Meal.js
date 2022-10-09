/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {RNCamera} from 'react-native-camera';
import Spinner from 'react-native-loading-spinner-overlay';
import * as ImagePicker from 'react-native-image-picker';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import LinearGradient from 'react-native-linear-gradient';
import Loader from '../components/Loader';

const MainScreen = ({routes, navigation}) => {
  let camera;
  const [spinner, setSpinner] = useState(false);
  const [loading, setLoading] = React.useState(false);

  c

  return (
    <View style={styles.container}>
      <View
        style={{
          height: SIZES.height * 0.8,
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
        <Loader loading={loading} />
        {/* <View style={{width: '100%', height: SIZES.height * 0.8}}> */}
        
        {/* </View> */}
      </View>
      <LinearGradient
        colors={['transparent', COLORS.black, COLORS.third]}
        style={styles.overlay}>
        <View style={styles.rowFlex}>
          <TouchableOpacity
            onPress={() => launchImageLibrary()}
            style={styles.slide2}>
            <View style={styles.centerFlex}>
              {/* <Icon name="rocket-outline" size={50} color={COLORS.white} /> */}
              <Text style={styles.text001}>Upload</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => takePicture()} style={styles.slide2}>
            <View style={styles.centerFlex}>
              {/* <Icon name="rocket-outline" size={50} color={COLORS.white} /> */}
              <Text style={styles.text001}>Capture</Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  centerFlex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  overlay: {
    marginTop: -SIZES.height * 0.2,
    height: SIZES.height * 0.7,
    flex: 1,
  },
  rowFlex: {
    // marginTop: SIZES.height * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
  },
  text001: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    backgroundColor: COLORS.black,
  },
  slide1: {
    backgroundColor: COLORS.third,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: SIZES.width * 0.4,
    maxHeight: SIZES.width * 0.15,
  },
  slide2: {
    backgroundColor: COLORS.third,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: SIZES.width * 0.4,
    maxHeight: SIZES.width * 0.1,
  },
});
