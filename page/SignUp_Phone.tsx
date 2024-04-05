import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {NoAccountTag, SocialMediaLogin} from '../components';

export const SignUp_Phone = () => {
  return (
    <View style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.phoneRegion}>
            <Text>+61</Text>
            <Image
              source={require('../images/signUpPhone/downBtn.png')}></Image>
          </TouchableOpacity>

          <TextInput
            style={styles.textInput}
            placeholder="Phone number"></TextInput>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        <View style={styles.horizontalContainer}>
          <Text style={styles.horizontal}></Text>
          <Text>or</Text>
          <Text style={styles.horizontal}></Text>
        </View>

        {/* Login with socialmedia  */}
        <SocialMediaLogin />
      </View>
      <NoAccountTag />
    </View>
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
});
