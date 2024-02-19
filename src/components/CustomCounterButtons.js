import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, Text, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../store/counterSlice';

const CustomCounterButtons = () => {
  const [customValue, setCustomValue] = useState('');
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.count);

  const handleCustomIncrement = () => {
    const incrementValue = customValue !== '' ? parseInt(customValue) : 1;
    dispatch(increment(incrementValue));
    setCustomValue('');
  };

  const handleCustomDecrement = () => {
    const decrementValue = customValue !== '' ? parseInt(customValue) : 1;
    dispatch(decrement(decrementValue));
    setCustomValue('');
  };

  const handleReset = () => {
    dispatch(reset());
    setCustomValue('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setCustomValue(text)}
        value={customValue}
        keyboardType="numeric"
        placeholder="Enter value"
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={handleCustomIncrement}>
          <Text style={styles.buttonText}>{`Increment by ${customValue !== '' ? customValue : '1'}`}</Text>
        </TouchableOpacity>
        {count > 0 && 
          <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={handleCustomDecrement}>
            <Text style={styles.buttonText}>{`Decrement by ${customValue !== '' ? customValue : '1'}`}</Text>
          </TouchableOpacity>
        }
        <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: Dimensions.get('window').height * 0.02, 
  },
  input: {
    height: Dimensions.get('window').height * 0.05,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: Dimensions.get('window').height * 0.01, 
    paddingHorizontal: Dimensions.get('window').width * 0.02, 
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    alignItems: 'center',
    padding: Dimensions.get('window').height * 0.015,
    borderRadius: Dimensions.get('window').width * 0.02, 
    marginBottom: Dimensions.get('window').height * 0.01, 
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default CustomCounterButtons;
