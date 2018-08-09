import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Item from '../pages/item';

export default class Itens extends Component {

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  navigateToPage = () => {

  }


  render() {
    return (
      <TouchableOpacity onPress={() => { this.setModalVisible(true); }} activeOpacity={0.9}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { this.setModalVisible(false); }}
          >
          <Image style={styles.headerImage} source={{ uri: `https://image.tmdb.org/t/p/original${this.props.backdrop}` }} />

            <Text style={styles.headerTitulo}>
              {this.props.title}
            </Text>

            <View style={styles.bodyBox}>
              <Text style={styles.bodySeparador}>
                ________________________________________________
               </Text>
               <Text style={styles.bodyText}>
                 {this.props.sinopse}
               </Text>
            </View>

      </Modal>


      <View style={styles.container}>
        <View style={styles.headerBox}>
          <Image style={styles.headerImage} source={{ uri: `https://image.tmdb.org/t/p/original${this.props.capa}` }} />
          <View style={styles.headerText}>
            <Text style={styles.headerTitulo}>
              {this.props.title}
            </Text>
            <Text style={styles.headerDate}>
              Data de lançmento: {this.props.date}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 5,
    height: 300,
    backgroundColor: '#e0e0e0'
  },

  //HEADER
  headerBox: {
    flexDirection: 'row',
    padding: 5,
  },

  headerText: {
    flexDirection: 'column',
    margin: 10,
    alignSelf: 'center'
  },

  headerImage: {
    height: 100,
    width: 70,
    borderRadius: 4
  },

  headerTitulo: {
    fontSize: 18,
    margin: 1,
    fontWeight: 'bold',
    color: '#2f2f2f'
  },

  headerDate: {

  },

  //BODY

  bodyBox: {

  },

  bodyText: {

  },

  bodySeparador: {
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 5
  }
});
