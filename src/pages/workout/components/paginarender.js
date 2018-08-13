import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal
} from 'react-native';
import styles from '../style';

const PaginaRender = ({ treinos }) => (
    <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
      <Modal
          animationType="slide"
          transparent={false}
          visible={false}
          onRequestClose={() => {}}
      >

      {treinos.serie.map(treino => <Text key={treino.exercicio}>{treino.exercicio}</Text>)}

      </Modal>

        <View style={styles.cabecalhoTreinos}>
            <Image style={styles.borders} source={treinos.imagem} />
            <View style={styles.textComponent}>
                <Text style={styles.txtTipo}>{treinos.tipo}</Text>
                <Text style={styles.txtDescricao}>{treinos.descricao}</Text>
            </View>
        </View>

      </TouchableOpacity>
  );

export default PaginaRender;
