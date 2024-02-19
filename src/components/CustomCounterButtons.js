import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
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
        <Button title={`Increment by ${customValue !== '' ? customValue : '1'}`} onPress={handleCustomIncrement} />
        {count > 0 && <Button title={`Decrement by ${customValue !== '' ? customValue : '1'}`} onPress={handleCustomDecrement} />}
        <Button title="Reset" onPress={handleReset} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: 'coloumn',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default CustomCounterButtons;
