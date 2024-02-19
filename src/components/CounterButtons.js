import React from 'react';
import { View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/reducers';

const CounterButtons = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.count);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    if (count > 0) {
      dispatch(decrement());
    }
  };

  return (
    <View>
      <Button title="Increment" onPress={handleIncrement} />
      {count > 0 && <Button title="Decrement" onPress={handleDecrement} />}
    </View>
  );
};

export default CounterButtons;
