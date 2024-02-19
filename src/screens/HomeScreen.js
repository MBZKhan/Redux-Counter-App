import React from 'react';
import { View, StyleSheet } from 'react-native';
import CounterDisplay from '../components/CounterDisplay';
import CustomCounterButtons from '../components/CustomCounterButtons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CounterDisplay />
      <CustomCounterButtons /> 
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
