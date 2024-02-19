import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const CounterDisplay = () => {
  const count = useSelector(state => state.counter.count);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default CounterDisplay;
