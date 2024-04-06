import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUpPage, SignUp_Phone} from '../../page';
import { SocialMediaLogin_Phone, SocialMedia_Gmail } from '../../components';
import SignUp_Gmail from '../../page/SignUp_Gmail';
import { SignUpPhone_Tab } from './tabs';



//PHONE TAB

//==========


// RouteType_SCREEN:
export type SignUpStackParamList = {
  'Create your business': undefined;
  'Sign up Tanca': undefined;
  'Sign up Phone': undefined
};

export const SignUpRoutes = () => {
  // routes
  const SignUpStack = createNativeStackNavigator<SignUpStackParamList>();

  return (
    <SignUpStack.Navigator initialRouteName="Create your business">
      <SignUpStack.Screen name="Create your business" component={SignUpPage} />
      <SignUpStack.Screen name="Sign up Tanca" component={SignUp_Phone} />
      <SignUpStack.Screen name="Sign up Phone" component={SignUp_Gmail}  />
    </SignUpStack.Navigator>
  );
};

export default SignUpRoutes;
