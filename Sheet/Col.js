import React from 'react';

import {StyleSheet, View, Text, TextInput} from 'react-native';

export default class Col extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleInput(value) {
    const {updateValues, rowIndex, colIndex, numerical} = this.props;

    if (!numerical) {
      this.setState({value});
      return;
    }

    if (value === '') {
      updateValues(rowIndex, colIndex, -1);
      this.setState({value});
      return;
    }

    const intValue = value !== '-' ? parseInt(value, 10) : 0;

    if (intValue >= 0 && intValue <= 100) {
      updateValues(rowIndex, colIndex, intValue);
      this.setState({value: value === '0' ? '-' : value});
    }
  }

  render() {
    const {empty, main, bold, heading, writable, numerical} = this.props;
    const {value} = this.state;

    return (
      <View
        style={[
          !empty && !main && styles.white,
          heading !== '' || main ? styles.itemCol : styles.col,
          styles.border,
        ]}>
        {heading ? (
          <Text style={[bold && styles.bold, styles.text]}>{heading}</Text>
        ) : (
          <TextInput
            style={[styles.textField, styles.bold]}
            onChangeText={(val) => this.handleInput(val)}
            value={!writable && this.props.value ? this.props.value : value}
            autoCorrect={false}
            contextMenuHidden={true}
            allowFontScaling={false}
            maxLength={3}
            keyboardType={numerical ? 'number-pad' : 'default'}
            autoCapitalize="characters"
            textAlign="center"
            editable={writable}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  col: {
    flex: 1,
    alignSelf: 'stretch',
  },
  itemCol: {
    flex: 2,
    alignSelf: 'stretch',
    paddingLeft: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
  },
  margin: {
    marginTop: 1,
    marginLeft: 1,
    marginRight: 1,
    marginBottom: 1,
  },
  border: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
  },
  white: {
    backgroundColor: 'white',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textField: {
    height: 30,
    width: 60,
    fontSize: 16,
    paddingTop: -10,
  },
});
