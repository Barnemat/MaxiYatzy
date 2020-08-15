import React from 'react';

import {StyleSheet, View} from 'react-native';

import Row from './Row.js';
import types from './types.js';

export default class Sheet extends React.Component {
  constructor(props) {
    super(props);

    const values = [];
    types.forEach(() => {
      const cols = [];

      for (let i = 0; i < 7; i++) {
        cols.push(-1);
      }

      values.push(cols);
    });

    this.state = {
      values,
    };

    this.updateValues = this.updateValues.bind(this);
  }

  renderRows() {
    let key = 0;
    const elements = [
      <Row
        updateValues={this.updateValues}
        key={key++}
        heading=""
        main
        rowIndex={-1}
      />,
    ];

    types.forEach((type) => {
      elements.push(
        <Row
          updateValues={this.updateValues}
          key={key++}
          heading={type}
          bold={key === elements.length - 1}
          rowIndex={key - 2}
        />,
      );
    });

    return elements;
  }

  getActiveCols() {
    const {values} = this.state;
    const activeCols = [];
    const defaultCols = [0, 1, 2, 3, 4, 5, 6];

    if (values.length === 0) {
      return defaultCols;
    }

    for (let i = 0; i < values[0].length; i++) {
      for (let j = 0; j < values.length; j++) {
        if (values[j][i] !== -1) {
          activeCols.push(i);
          break;
        }
      }
    }

    return activeCols.length > 0 ? activeCols : defaultCols;
  }

  updateValues(row, col, value) {
    const {values} = this.state;
    values[row][col] = value;

    this.checkFirstSum(values);
    this.setState(values);
  }

  checkFirstSum(values) {
    const activeCols = this.getActiveCols();

    activeCols.forEach((colIndex) => {
      let sum = 0;
      let broken = false;

      for (let i = 0; i < 6; i++) {
        if (values[i][colIndex] !== -1) {
          sum += values[i][colIndex];
        } else {
          broken = true;
          break;
        }
      }

      if (!broken) {
        values[6][colIndex] = sum;
        values[7][colIndex] = sum >= 84 ? 100 : 0;
      }
    });
  }

  checkIsDone() {}

  render() {
    console.log('update');
    this.state.values.forEach((value) => console.log(value));
    console.log(this.getActiveCols());
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
