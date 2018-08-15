import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import PaginaRender from './components/paginarender';
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';

const treinoA = require('../../assents/imgs/peito.png');
const treinoB = require('../../assents/imgs/treinocostas.png');
const treinoC = require('../../assents/imgs/perna.png');


class Workout extends Component {

  
  renderItem = ({ item }) => (<PaginaRender treinos={item} />);

  render() {
    return (
      <ImageBackground
        source={require('../../assents/imgs/workout1.jpg')}
        style={styles.ImageBackground}
        resizeMode="cover"
      >
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
                    Workout
                </Text>
              </View>
            </View>

            <FlatList
              data={this.props.treinos}
              keyExtractor={item => String(item.tipo)}
              renderItem={this.renderItem}
            />

        </View>
      </ImageBackground>
    );
  }
}


const mapStateToProps = state => ({
  treinos: state.treinos,
});

export default connect(mapStateToProps)(Workout);
