import React from 'react';
import { View, StyleSheet } from 'react-native';
import CounterDisplay from '../components/CounterDisplay';
import CounterButtons from '../components/CounterButtons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CounterDisplay />
      <CounterButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
