import React from 'react';
import { View, StyleSheet } from 'react-native';
import CounterDisplay from '../components/CounterDisplay';
import CounterButtons from '../components/CounterButtons';
import { connect } from 'react-redux';
import { increment, decrement } from '../store/actions';

const HomeScreen = ({ increment, decrement }) => {
  return (
    <View style={styles.container}>
      <CounterDisplay />
      <CounterButtons increment={increment} decrement={decrement} />
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

export default connect(null, { increment, decrement })(HomeScreen);
