import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUp_Phone } from '../../../page';
import SignUp_Gmail from '../../../page/SignUp_Gmail';

export type SignUpPhoneTabParamList = {
  'phone': undefined;
  'gmail': undefined;
};

export const SignUpPhone_Tab = () => {
  const SignUpTab = createNativeStackNavigator<SignUpPhoneTabParamList>();
  return (
    <SignUpTab.Navigator>
      <SignUpTab.Screen
        name="phone"
        component={SignUp_Phone}
        options={{headerShown: false}}
      />
      <SignUpTab.Screen
        name="gmail"
        component={SignUp_Gmail}
        options={{headerShown: false}}
      />
    </SignUpTab.Navigator>
  );
};

export default SignUpPhone_Tab
