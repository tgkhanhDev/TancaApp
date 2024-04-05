import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { SocialMediaLogin } from '../components';

export const SignUpPage = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/signUpPage/main.png')} />
      <Text style={styles.centerText}>
        Creating an account will allow you to use Tanca on your phone and on the
        web
      </Text>

      <TouchableOpacity style={styles.button}>
        <Image source={require('../images/signUpPage/phone.png')} />
        <Text style={styles.buttonText}>Sign up with Phone</Text>
      </TouchableOpacity>

      <View style={styles.horizontalContainer}>
        <Text style={styles.horizontal}></Text>
        <Text style={styles.centerText}>or, sign up with</Text>
        <Text style={styles.horizontal}></Text>
      </View>
      
      {/* Login with socialmedia  */}
      <SocialMediaLogin />
    </View>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  centerText: {
    color: '#8793B4',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    fontSize: 17.5
  },
  button: {
    backgroundColor: '#1ECC78',
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 21,
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
    overflow: 'hidden',
    width: '100%',
  },
  horizontal: {
    flex: 1,
    height: 0,
    borderWidth: 0.25,
    borderColor: '#8793B4',
  },

  
});
