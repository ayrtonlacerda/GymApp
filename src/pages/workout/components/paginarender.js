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

export default class PaginaRender extends Component {
    state ={
        modalVisible: false,
        serie1: [],
    }

    componentWillMount = () => {
       // this.setState({ serie1: this.props.serie });
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
      }

  render() {
    return (


    <TouchableOpacity onPress={() => { this.setModalVisible(true); }} activeOpacity={0.6}>
    <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => { this.setModalVisible(false); }}
    >

    <View style={styles.modalContainer}>

      <View style={styles.exercio}>
        <View style={styles.titleModal}>
          <Text style={styles.titleExercicio}>
            {this.props.exercicio1}
          </Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.textDetails}>
            rep: {this.props.repeticao1}
          </Text>
          <Text style={styles.textDetails}>
            peso: {this.props.peso1}
          </Text>
          <Text style={styles.textDetails}>
            intervalo: {this.props.descanso1}
          </Text>
        </View>
      </View>

      <View style={styles.exercio}>
        <View style={styles.titleModal}>
          <Text style={styles.titleExercicio}>
            {this.props.exercicio2}
          </Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.textDetails}>
            rep: {this.props.repeticao2}
          </Text>
          <Text style={styles.textDetails}>
            peso: {this.props.peso2}
          </Text>
          <Text style={styles.textDetails}>
            intervalo: {this.props.descanso2}
          </Text>
        </View>
      </View>

      <View style={styles.exercio}>
        <View style={styles.titleModal}>
          <Text style={styles.titleExercicio}>
            {this.props.exercicio3}
          </Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.textDetails}>
            rep: {this.props.repeticao3}
          </Text>
          <Text style={styles.textDetails}>
            peso: {this.props.peso3}
          </Text>
          <Text style={styles.textDetails}>
            intervalo: {this.props.descanso3}
          </Text>
        </View>
      </View>

      <View style={styles.exercio}>
        <View style={styles.titleModal}>
          <Text style={styles.titleExercicio}>
            {this.props.exercicio4}
          </Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.textDetails}>
            rep: {this.props.repeticao4}
          </Text>
          <Text style={styles.textDetails}>
            peso: {this.props.peso4}
          </Text>
          <Text style={styles.textDetails}>
            intervalo: {this.props.descanso4}
          </Text>
        </View>
      </View>

    </View>
    </Modal>

        <View style={styles.cabecalhoTreinos}>
            <Image style={styles.borders} source={this.props.imagem} />
            <View style={styles.textComponent}>
                <Text style={styles.txtTipo}>{this.props.tipo}</Text>
                <Text style={styles.txtDescricao}>{this.props.descricao}</Text>
            </View>
        </View>
    </TouchableOpacity>
    );
  }
}
