import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react'
import { SignUpStackParamList } from '../router';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type SignUpPage_Props = NativeStackScreenProps<SignUpStackParamList>;

export const Home = ({navigation}: SignUpPage_Props) => {
  return (
    <View>
      <Text>Page Home</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Create your business')}>
        <Image source={require('../images/signUpPage/phone.png')} />
        <Text style={styles.buttonText}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home

const styles = StyleSheet.create({
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
});