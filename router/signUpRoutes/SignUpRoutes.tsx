import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUpPage, SignUp_Phone} from '../../page';



// RouteType_SCREEN:
export type SignUpStackParamList = {
  'Create your business': undefined;
  'Sign up Tanca': undefined;
};

export const SignUpRoutes = () => {
  // routes
  const SignUpStack = createNativeStackNavigator<SignUpStackParamList>();

  return (
    <SignUpStack.Navigator initialRouteName="Create your business">
      <SignUpStack.Screen name="Create your business" component={SignUpPage} />
      <SignUpStack.Screen name="Sign up Tanca" component={SignUp_Phone} />
    </SignUpStack.Navigator>
  );
};

export default SignUpRoutes;
