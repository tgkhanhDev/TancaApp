import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export const NoAccountTag = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer}>
        <View style={styles.handWithPhoneContainer}>
          <Image
            style={styles.purpleBg}
            source={require('../../images/noAccountTag/purpleBg.png')}
          />
          <Image
            source={require('../../images/noAccountTag/handWithPhone.png')}
          />
        </View>

        {/* Center Text  */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Don't have an account?</Text>
          <Text style={styles.subTitle}>
            Accept the invite email from your manager to sign up
          </Text>
        </View>

        {/* Chevron  */}
        <Image
          source={require('../../images/noAccountTag/chevron-right.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NoAccountTag;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding:20,
  },
  btnContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F9FF',
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
    minWidth: 335,
  },
  purpleBg: {
    position: 'absolute',
  },
  handWithPhoneContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  //CenterText
  textContainer: {
    width: 215,
  },
  title: {
    color: '#303E65',
    fontSize: 18.5,
  },
  subTitle: {
    color: '#7A8CB4',
  },
});
