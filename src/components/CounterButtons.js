import React from 'react';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../store/reducers'; 

const CounterButtons = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
};

export default CounterButtons;
