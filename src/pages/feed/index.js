import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';

import styles from './style';

import ListaItens from '../../components/ListaItens';

export default class Feed extends Component {

  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            Feed
           </Text>
         </View>

         <ListaItens />
      </View>
    );
  }
}
