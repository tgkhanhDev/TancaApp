import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SignUpStackParamList } from '../router/signUpRoutes/SignUpRoutes';
import SignUpHorrizon from '../components/templates/SignUpHorrizon';

type SignUpPage_Props = NativeStackScreenProps<SignUpStackParamList>;

export const SignUpPage = ({navigation, route}: SignUpPage_Props ) => {
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={styles.container}>
        <Image source={require('../images/signUpPage/main.png')} />
        <Text style={styles.centerText}>
          Creating an account will allow you to use Tanca on your phone and on
          the web
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Sign up Tanca', {title:'phone'})}>
          <Image source={require('../images/signUpPage/phone.png')} />
          <Text style={styles.buttonText}>Sign up with Phone</Text>
        </TouchableOpacity>

        <SignUpHorrizon title="or, sign up with" />

        <View style={styles.socialBtnContainer}>
          <TouchableOpacity
            style={styles.socialBtn}
            onPress={() => navigation.navigate('Sign up Tanca',{title:'gmail'})}>
            <Image source={require('../images/signUpPage/post.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Image source={require('../images/signUpPage/Facebook.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Image source={require('../images/signUpPage/Google.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Image source={require('../images/signUpPage/Id-apple.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
    textAlign: 'center',
    fontSize: 17.5,
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

  //====================
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
