import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal
} from 'react-native';
import styles from '../style';
import Coach from './coach';

export default class PaginaRender extends Component {

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.setModalVisible(true)} activeOpacity={0.6}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
             this.setModalVisible(false)
          }}
        >
        <ScrollView>
          <View style={styles.modal}>
            {this.props.treinos.serie.map(series =>
               <Coach
                key={series.exercicio}
                exercicio={series.exercicio}
                repeticao={series.repeticao}
                descanso={series.descanso}
                peso={series.peso}
               />)
            }
          </View>
        </ScrollView>
        </Modal>

          <View style={styles.cabecalhoTreinos}>
              <Image style={styles.borders} source={this.props.treinos.imagem} />
              <View style={styles.textComponent}>
                  <Text style={styles.txtTipo}>{this.props.treinos.tipo}</Text>
                  <Text style={styles.txtDescricao}>{this.props.treinos.descricao}</Text>
              </View>

          </View>

        </TouchableOpacity>
      );
  }
}
