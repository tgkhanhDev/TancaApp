import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SignUpHorrizon = ({title}:{title:string}) => {
  return (
    <View style={styles.horizontalContainer}>
      <Text style={styles.horizontal}></Text>
      <Text>{title}</Text>
      <Text style={styles.horizontal}></Text>
    </View>
  );
};

export default SignUpHorrizon;

const styles = StyleSheet.create({
  centerText: {
    color: '#8793B4',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 17.5,
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
