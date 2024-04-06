import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

export const SocialMedia_Gmail = () => {
  return (
    <View style={styles.socialBtnContainer}>
      <TouchableOpacity style={styles.socialBtn}>
        <Image source={require('../../images/signUpPage/phone_black.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialBtn}>
        <Image source={require('../../images/signUpPage/Facebook.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialBtn}>
        <Image source={require('../../images/signUpPage/Google.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialBtn}>
        <Image source={require('../../images/signUpPage/Id-apple.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default SocialMedia_Gmail;

const styles = StyleSheet.create({
  socialBtnContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  socialBtn: {
    height: 40,
    width: 68,
    backgroundColor: '#F5F9FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
