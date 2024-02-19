import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const CounterDisplay = () => {
  const count = useSelector(state => state.counter.count);

  return (
    <View>
      <Text>Count: {count}</Text>
    </View>
  );
};

export default CounterDisplay;
