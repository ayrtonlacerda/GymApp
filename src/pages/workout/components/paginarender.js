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

     
    <TouchableOpacity onPress={() => {this.setModalVisible(true);}} activeOpacity={0.6}> 
    <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => { this.setModalVisible(false); }}
        >
    
    <Text>{this.props.exercicio1}</Text>

        
       

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
