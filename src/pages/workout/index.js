import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import styles from './style';
import PaginaRender from './components/paginarender';

const treinoA = require('../../assents/imgs/peito.png');
const treinoB = require('../../assents/imgs/treinocostas.png');
const treinoC = require('../../assents/imgs/perna.png');


export default class Workout extends Component {

  state = {
    treino: [
      {
        tipo: 'Treino A',
        descricao: 'Peito e Triceps',
        imagem: treinoA,
             
            
               exercicio1: 'Pull-over',
              repeticao1: 3,
              descanso1: '45s',
              peso1: '35 Kg',
              exercicio2: 'Supino inclinado',
              repeticao2: 3,
              descanso2: '45s',
              peso2: '20 Kg',
        },    
     
  

      {
        tipo: 'Treino B',
        descricao: 'Costas e Biceps',
        imagem: treinoB,
        exercicio1: 'Puxada Supinad',
              repeticao1: 3,
              descanso1: '45s',
              peso1: '35 Kg',
              exercicio2: 'Supino inclinado',
              repeticao2: 3,
              descanso2: '45s',
              peso2: '20 Kg',
      },

      {
        tipo: 'Treino C',
        descricao: 'Perna e Abdomem',
        imagem: treinoC,
        exercicio1: 'Leg 45',
              repeticao1: 3,
              descanso1: '45s',
              peso1: '35 Kg',
              exercicio2: 'Supino inclinado',
              repeticao2: 3,
              descanso2: '45s',
              peso2: '20 Kg',
      }
    ],
  }
  
  render() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>
                    Workout
                </Text> 
            </View>

          <ScrollView>
            <View style={styles.body}>
              {this.state.treino.map(treinos =>
               <PaginaRender key={treinos.tipo} 
                             tipo={treinos.tipo}
                             descricao={treinos.descricao}
                             imagem={treinos.imagem}
                             exercicio1={treinos.exercicio1} 
              />) }
            </View>
          </ScrollView>

        </View>
    );
  }
}

