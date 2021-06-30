import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

import { maskCurrency } from '../tools/mask';

function Input({inputMaskChange, ...rest}) {
  function hadledChange(text) {
    const value = maskCurrency(text);
    inputMaskChange(value);
  }
  return (
    <>
      <TextInput style={styles.input}
        onChangeText={(text) => hadledChange(text)}{...rest}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '85%',
    fontSize: 35,
    backgroundColor: '#303030',
    paddingHorizontal: 8,
    paddingVertical: 25,
    color: '#fff',
  },
});

export default Input;