import React from 'react';

import {StyleSheet, View} from 'react-native';

import Row from './Row.js';
import types from './types.js';

export default class Sheet extends React.Component {
  renderRows() {
    let key = 0;
    const elements = [<Row key={key++} heading="" main />];

    types.forEach((type) => {
      elements.push(
        <Row key={key++} heading={type} bold={key === elements.length - 1} />,
      );
    });

    return elements;
  }

  render() {
    return <View style={styles.sheet}>{this.renderRows()}</View>;
  }
}

const styles = StyleSheet.create({
  sheet: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 560,
    marginTop: 10,
    marginLeft: 7,
    marginRight: 7,
    marginBottom: 10,
  },
});
