/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import SignUpRoutes from './router/signUpRoutes/SignUpRoutes';


function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <SignUpRoutes/>
    </NavigationContainer>

  );
}


export default App;
