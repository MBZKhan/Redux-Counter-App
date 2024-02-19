import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const CounterDisplay = ({ count }) => {
  return (
    <View>
      <Text>Count: {count}</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  count: state.count
});

export default connect(mapStateToProps)(CounterDisplay);
