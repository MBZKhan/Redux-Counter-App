import React, { useState } from 'react';
import { View, Button, TextInput, Text } from 'react-native';
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
    <View>
      <Text style={{ marginBottom: 10 }}>Count: {count}</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={text => setCustomValue(text)}
        value={customValue}
        keyboardType="numeric"
        placeholder="Enter value"
      />
      <Button title={`Increment by ${customValue !== '' ? customValue : '1'}`} onPress={handleCustomIncrement} />
      {count > 0 && <Button title={`Decrement by ${customValue !== '' ? customValue : '1'}`} onPress={handleCustomDecrement} />}
      <Button title="Reset" onPress={handleReset} />
    </View>
  );
};

export default CustomCounterButtons;
