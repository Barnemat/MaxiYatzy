import React from 'react';

import {StyleSheet, View} from 'react-native';

import Col from './Col.js';

const numCols = 8;

export default class Row extends React.Component {
  renderCols() {
    const {main, bold, heading} = this.props;
    const cols = [];
    let key = 0;

    cols.push(<Col key={key++} heading={heading} bold={bold} main={main} />);

    for (let i = 0; i < numCols - 1; i++) {
      cols.push(<Col key={key++} heading="" numerical={!main} />);
    }

    return cols;
  }

  render() {
    return <View style={styles.row}>{this.renderCols()}</View>;
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
});
