import React from 'react';

import {StyleSheet, ScrollView, View} from 'react-native';

import Sheet from './Sheet/Sheet.js';

const App = () => {
  return (
    <View style={styles.body}>
      <ScrollView
        style={styles.body}
        scrollEventThrottle={16}
        horizontal={true}>
        <Sheet />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'darkgrey',
  },
});

export default App;
