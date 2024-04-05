import React from 'react'
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

export const SocialMediaLogin = () => {
  return (
    <View style={styles.socialBtnContainer}>
      <TouchableOpacity style={styles.socialBtn}
      
      >
        <Image source={require('../../images/signUpPage/post.png')} />
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
}

export default SocialMediaLogin

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