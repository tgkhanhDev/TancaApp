import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUpPage, SignUp_Phone} from '../../page';
import {PhoneAndGmailTabParamList, SignUpPhone_Tab} from './tabs';

//How routes Work:
//Screen:
//SignUpPage (m)
//    L___SignUpPage(m)
//    L___SignUp_Gmail
//SignUpPhone v
//    L___SignUp_Phone(m)
//    L___SignUp_Gmail

// RouteType_SCREEN: == Main Screen -> Phone
export type SignUpStackParamList = {
  'Create your business': undefined;
  'Sign up Tanca': {title: 'phone' | 'gmail'};
};

//Tab============


export const SignUpRoutes = () => {
  // routes
  const SignUpStack = createNativeStackNavigator<SignUpStackParamList>();

  return (
    <SignUpStack.Navigator initialRouteName="Create your business">
      <SignUpStack.Screen name="Create your business" component={SignUpPage} />
      <SignUpStack.Screen
        name="Sign up Tanca"
        component={SignUpPhone_Tab}
        initialParams={{
          title: 'gmail', //Default
        }}
      />
    </SignUpStack.Navigator>
  );
};

export default SignUpRoutes;
