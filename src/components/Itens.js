import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView
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
          style={styles.modal}
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { this.setModalVisible(false); }}
        >


         <View style={styles.containerModal}>

           <Image style={styles.modalImage} source={{ uri: `https://image.tmdb.org/t/p/original${this.props.backdrop}` }} />

            <Text style={styles.titleModal}>
              {this.props.title}
             </Text>
             <Text style={styles.dateModal}>
              Data de lançamento: {this.props.date}
              </Text>
              <Text style={styles.popularityModal}>
              Popularidade: {this.props.popularity}
               </Text>

            <ScrollView style={styles.scrollModal}>
             <Text style={styles.textModal}>
               {this.props.sinopse}
              </Text>
            </ScrollView>
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
    marginTop: 7,
    //height: 320,
    width: 350,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',

  },

  //HEADER
  headerBox: {
    flexDirection: 'column',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerImage: {
    height: 250,
    width: 180,
    borderRadius: 4
  },

  headerTitulo: {
    fontSize: 20,
    margin: 1,
    fontWeight: 'bold',
    color: '#2f2f2f',
    alignSelf: 'center',
    textAlign: 'center',
  },

  headerDate: {

  },

  //Modal

  containerModal: {
    backgroundColor: '#e8e5e5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  scrollModal: {
    padding: 5,
  },

  modalImage: {
    width: 400,
    height: 250,
  },

  titleModal: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
    textAlign: 'center',
  },

  dateModal: {
    fontSize: 16,
    color: '#2f2f2f',
    marginTop: 2,
    textAlign: 'center',
  },

  popularityModal: {
    fontSize: 16,
    color: '#2f2f2f',
  },

  textModal: {
    fontSize: 14,
    color: '#2f2f2f',
    marginTop: 20,
    padding: 15,
  }

});
