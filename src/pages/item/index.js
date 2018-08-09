import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import styles from './styles';

export default class Item extends Component {
  static navigationOptions = {
    header: null,
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Item HAHAAHHA</Text>
      </View>
    );
  }
}
