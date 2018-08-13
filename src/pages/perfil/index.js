import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';

const modeloPerfil = require('../../assents/imgs/modelo2.png');

export default class Perfil extends Component {
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
              Perfil
            </Text>
        </View>
        <View />
      </View>

        <ScrollView style={styles.viewGeral}>
          <View style={styles.teste}>
            <Image style={styles.imagemPerfil} source={modeloPerfil} />
          </View>
          <View style={styles.viewGeral2}>
            <View style={styles.viewAtributos}>
              <Text style={styles.txtAtributos}>Nome:</Text>
              <Text style={styles.txtDescricaoAtributos}> Wolfpack Team Black Diamonds</Text>
            </View>

            <View style={styles.viewAtributos}>
              <Text style={styles.txtAtributos}>Idade:</Text>
              <Text style={styles.txtDescricaoAtributos}> 22 anos</Text>
            </View>

            <View style={styles.viewAtributos}>
              <Text style={styles.txtAtributos}>Sexo:</Text>
              <Text style={styles.txtDescricaoAtributos}> Masculino</Text>
            </View>

            <View style={styles.viewAtributos}>
              <Text style={styles.txtAtributos}>Data de entrada na academia:</Text>
              <Text style={styles.txtDescricaoAtributos}> 01/07/2018</Text> 
            </View>

            <View style={styles.viewAtributos}>
              <Text style={styles.txtAtributos}>Plano atual:</Text>
              <Text style={styles.txtDescricaoAtributos}> Black Diamond</Text> 
            </View>

            <View style={styles.viewAtributos}>
              <Text style={styles.txtAtributos}>Vencimento do plano atual:</Text>
              <Text style={styles.txtDescricaoAtributos}> 01/02/2019</Text> 
            </View>
          </View>
         </ScrollView>


        </View>
      </ImageBackground>
    );
  }
}

