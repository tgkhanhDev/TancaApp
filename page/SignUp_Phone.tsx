import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ModalOTP, NoAccountTag, SocialMedia_Phone} from '../components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import SignUpHorrizon from '../components/templates/SignUpHorrizon';
import {PhoneAndGmailTabParamList} from '../router/signUpRoutes/tabs';

// type SignUpPage_Props = NativeStackScreenProps<SignUpStackParamList>;
type SignUpPage_Props = NativeStackScreenProps<PhoneAndGmailTabParamList>;

export const SignUp_Phone = ({navigation, route}: SignUpPage_Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.phoneRegion}>
            <Text>+61</Text>
            <Image
              source={require('../images/signUpPhone/downBtn.png')}></Image>
          </TouchableOpacity>

          <TextInput
            style={styles.textInput}
            placeholder="Phone number"
            onChangeText={text => setPhoneNumber(text)}></TextInput>
        </View>

        <ModalOTP inputState={phoneNumber} length={6} navigation={navigation} route={route} />

        <SignUpHorrizon title="or" />

        {/* //=============== */}
        <SocialMedia_Phone navigation={navigation} route={route} />
      </View>
      <NoAccountTag />
    </ScrollView>
  );
};

export default SignUp_Phone;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'space-between',
  },

  inputContainer: {
    flexDirection: 'row',
    borderRadius: 20,
  },
  inputBackground: {
    backgroundColor: '#F2F7FF',
  },
  phoneRegion: {
    backgroundColor: '#F2F7FF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#E4ECFF',
    paddingHorizontal: 10,
    gap: 5,
  },
  textInput: {
    backgroundColor: '#F2F7FF',
    flex: 1,
    paddingLeft: 15,
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

  // ==========
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
