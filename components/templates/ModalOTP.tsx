import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, {useEffect, useRef, useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  Keyboard,
  Alert,
} from 'react-native';
import { SignUpStackParamList } from '../../router';

type OTPInputProps = {
  length: number;
};

type SignUpPage_Props = NativeStackScreenProps<SignUpStackParamList>;


export const ModalOTP = (
  {navigation, route, length , inputState}: any,
) => {
  const [modalVisible, setModalVisible] = useState(false);
  const inputRefs = useRef<Array<any>>([]);

  const handleChange = (text: string, index: number) => {
    if (text.length !== 0) {
      return inputRefs?.current[index + 1]?.focus();
    }
    return inputRefs?.current[index - 1]?.focus();
  };

  const handleBackspace = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    const {nativeEvent} = event;

    if (nativeEvent.key === 'Backspace') {
      inputRefs?.current[index - 1]?.focus();
      handleChange('', index);
    }
  };


  const handleCheckPhoneNumber = () => {
    if ( !inputState || inputState?.trim() === '') {
      Alert.alert('Error', 'Phone number cannot be empty');
    } else {
      setModalVisible(true)
    }
  };

  return (
    <View>
      {/* Modal  */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.textContainer}>
              <Text style={styles.modalText}>Login password</Text>
              <Text style={styles.textStyle}>
                Please create a password for your first login. This password
                will automatically be saved for future logins.
              </Text>
            </View>

            {/* Input  */}
            <View style={styles.inputContainer}>
              {[...Array(length).keys()].map((e, index) => (
                <TextInput
                  ref={ref => {
                    if (ref && !inputRefs.current.includes(ref)) {
                      inputRefs.current = [...inputRefs.current, ref];
                    }
                  }}
                  key={index}
                  maxLength={1}
                  contextMenuHidden
                  selectTextOnFocus
                  style={styles.input}
                  keyboardType="decimal-pad"
                  testID={`OTPInput-${index}`}
                  onChangeText={text => handleChange(text, index)}
                  onKeyPress={event => handleBackspace(event, index)}
                />
              ))}
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Agree</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* ================  */}

      {/* Button Show Modal  */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleCheckPhoneNumber() }>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      {/* ================= */}
    </View>
  );
};

export default ModalOTP;

const styles = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowColor: '#303E65',
    shadowOpacity: 0.13,
    shadowRadius: 20,
    elevation: 5,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },

  textContainer: {
    gap: 10,
    marginBottom: 10,
  },
  textStyle: {
    color: '#96A0BD',
    fontWeight: '400',
    textAlign: 'left',
    fontSize: 16.45,
  },
  modalText: {
    textAlign: 'left',
    fontWeight: '600',
    fontSize: 23.5,
    marginRight: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Password Input
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  input: {
    fontSize: 24,
    textAlign: 'center',
    width: 47,
    height: 52,
    borderRadius: 10,
    backgroundColor: '#F2F7FF',
  },

  textInput: {
    flex: 1,
    color: 'black',
  },
});
