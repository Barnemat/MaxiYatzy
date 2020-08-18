import React from 'react';

import {StyleSheet, View} from 'react-native';

import Col from './Col.js';

const numCols = 8;

export default class Row extends React.Component {
  constructor(props) {
    super(props);

    this.lockedRows = [6, 7, 22];

    this.state = {
      writable: !this.lockedRows.includes(props.rowIndex),
    };
  }

  getValue(col) {
    const {values, rowIndex} = this.props;

    if (this.lockedRows.includes(rowIndex) && values[rowIndex][col] > -1) {
      return values[rowIndex][col].toString();
    }
  }

  renderCols() {
    const {writable} = this.state;
    const {main, bold, heading, updateValues, rowIndex} = this.props;
    const cols = [];
    let key = 0;

    cols.push(
      <Col
        updateValues={updateValues}
        key={key++}
        heading={heading}
        bold={bold}
        main={main}
        writable={writable}
        rowIndex={rowIndex}
        colIndex={-1}
      />,
    );

    for (let i = 0; i < numCols - 1; i++) {
      cols.push(
        <Col
          updateValues={updateValues}
          key={key++}
          heading=""
          numerical={!main}
          writable={writable}
          rowIndex={rowIndex}
          colIndex={i}
          value={this.getValue(i)}
        />,
      );
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
