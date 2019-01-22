/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './src/components/Header';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Header headerText="React Native" />
    );
  }
}

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
};
