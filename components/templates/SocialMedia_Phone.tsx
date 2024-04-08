import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {PhoneAndGmailTabParamList} from '../../router/signUpRoutes/tabs';

type SignUpPage_Props = NativeStackScreenProps<PhoneAndGmailTabParamList>;

export const SocialMedia_Phone = ({navigation}: SignUpPage_Props) => {
  return (
    <View style={styles.socialBtnContainer}>
      <TouchableOpacity
        style={styles.socialBtn}
        onPress={() => navigation.navigate('gmail')}>
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
};

export default SocialMedia_Phone;

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
