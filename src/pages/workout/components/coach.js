import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,

} from 'react-native';
import { colors, metric } from '../../../styles';

export default class Coach extends Component {
  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.title}>{this.props.exercicio}</Text>
        <View style={styles.atributos}>
          <Text style={styles.textAtributos}>Repetição: {this.props.repeticao}</Text>
          <Text style={styles.textAtributos}>Peso: {this.props.peso}</Text>
          <Text style={styles.textAtributos}>Descanso: {this.props.descanso}</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 7,
    padding: 10,
    borderRadius: metric.baseRadius,
    backgroundColor: colors.secundary,
  },

  title: {
    alignSelf: 'center',
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },

  textAtributos: {
    color: colors.white,
    fontSize: 16,

  },

  atributos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: metric.baseMargin,
  }
});
