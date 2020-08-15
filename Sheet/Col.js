import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Col extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleInput(value) {
    const intValue = parseInt(value);
    if (value === '-' || (intValue >= 0 && intValue <= 100)) {
      // TODO Funksjon for sending av verdi til array ('-' skal tolkes som 0)
      this.setState({ value: value === '0' ? '-' : value });
    }
  }

  render() {
    const {empty, main, bold, heading, numerical} = this.props;
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
            value={value}
            autoCorrect={false}
            contextMenuHidden={true}
            allowFontScaling={false}
            maxLength={3}
            keyboardType={numerical ? 'number-pad' : 'default'}
            autoCapitalize="characters"
            textAlign="center"
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
