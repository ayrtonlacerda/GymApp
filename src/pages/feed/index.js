import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';

import ListaItens from './components/listaitens';

export default class Feed extends Component {

  static navigationOptions ={
    title: 'Feed',

  }

  state = {
    drawer: false,
  }

  menu = () => {
    this.props.navigation.toggleDrawer();
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor='#06608c' />

        <View style={styles.header}>
          <View style={styles.viewIcon}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('DrawerToggle'); }}>
              <Icon name="md-menu" size={28} style={styles.icon} />
             </TouchableOpacity>
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.headerTitle}>
              Feed
            </Text>
          </View>
         </View>
         <ListaItens />

      </View>
    );
  }
}
