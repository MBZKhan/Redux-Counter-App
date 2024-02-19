import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { useSelector } from 'react-redux';

const CounterDisplay = () => {
  const count = useSelector(state => state.counter.count);
  const [animatedValue] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1.2,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.spring(animatedValue, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  }, [count, animatedValue]);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.counterText, { transform: [{ scale: animatedValue }] }]}>
        Count: {count}
      </Animated.Text>
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
