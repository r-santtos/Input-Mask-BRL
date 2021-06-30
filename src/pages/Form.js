import React, { useState } from 'react';
import {
  StyleSheet, 
  SafeAreaView,
} from 'react-native';
import Input from '../components/Input';

function Form() {
  const [money, setMoney] = useState('');
  function handleCuston(value) {
    setMoney(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Input
        value={money}
        placeholder='0,00'
        placeholderTextColor='red'
        keyboardType="decimal-pad"
        maxLength={14}
        inputMaskChange={(text) => handleCuston(text)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Form;