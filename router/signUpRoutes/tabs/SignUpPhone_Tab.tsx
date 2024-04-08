import React from 'react'
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUp_Phone } from '../../../page';
import SignUp_Gmail from '../../../page/SignUp_Gmail';
import { RouteProp } from '@react-navigation/native';
import { SignUpStackParamList } from '..';

export type PhoneAndGmailTabParamList = {
  'phone': undefined;
  'gmail': undefined;
};


type PhoneAndGmailTabProps = {
  route: RouteProp<SignUpStackParamList, 'Sign up Tanca'>;
};

export const SignUpPhone_Tab = ({route}: PhoneAndGmailTabProps) => {
  const {title} = route.params;

  const SignUpTab = createNativeStackNavigator();
  return (
    <SignUpTab.Navigator initialRouteName={title}>
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
