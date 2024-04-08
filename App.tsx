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
import {ModalOTP} from './components';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [otp, setOTP] = useState('');
  const handleOTPChange = (newValue: string, index:number) => {
    console.log('Trong Handle: ==========');
    // console.log("newValue: ", newValue);
    console.log("idx: ", index);
    
    //gen new OTP
    let newOTP;
    if (
      !isNaN(Number(newValue)) &&
      Number(newValue) >= 0 &&
      Number(newValue) <= 9 &&
      newValue != ''
    ) {
      newOTP = otp.concat(newValue);
      setOTP(newOTP);
      console.log('newOTP: ', newOTP);
    }else{
      console.log("Not a number");
      // newOTP= otp.substring(0,index-1)
      // setOTP(newOTP);
      // console.log('newOTP(del): ', newOTP);
    }


    // setOTP(newOTP);
  };

  return (
    // <NavigationContainer>
    //   <SignUpRoutes/>
    // </NavigationContainer>
    <ModalOTP
      length={6}
      value={otp}
      disabled={false}
      onChange={handleOTPChange}
    />
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
