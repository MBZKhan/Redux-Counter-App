import React from 'react';
import { View, Button } from 'react-native';

const CounterButtons = ({ increment, decrement }) => {
  return (
    <View>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

export default CounterButtons;
