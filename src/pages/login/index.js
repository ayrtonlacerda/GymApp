import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import {
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Picker
} from 'react-native';

import styles from './styles';


export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = { unidade: '' };
  }

  static navigationOptions ={
    header: null,
  }

  navigateToLogged = () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Logged' }),
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <ImageBackground
        source={require('../../assents/imgs/costas.jpg')}
        style={styles.ImageBackground}
        resizeMode="cover"
      >

      <StatusBar backgroundColor='rgba(6, 96, 140, 0.83)' />
        <View style={styles.container}>

          <Image style={styles.image} source={require('../../assents/imgs/corpofit.png')} />

          <View style={styles.forms}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Digite seu CPF"
              underlineColorAndroid="rgba(0,0,0,0)"
            />
          <View style={styles.forms2}>
            <Text style={styles.textUnidade}> Unidade: </Text>  
              <Picker style={styles.estiloPicker} placeholder="Selecione a sua unidade" selectedValue={this.state.unidade} onValueChange={op => { this.setState({ unidade: op }); }}>
                <Picker.Item label='Taguatinga' value='taguatinga' />
                <Picker.Item label='São Sebastião' value='saosebastiao' />
                <Picker.Item label='Sobradinho' value='sobradinho' />
                <Picker.Item label='Riacho Fundo I' value='riachofundo1' /> 
              </Picker>
          </View>

            <TouchableOpacity style={styles.button} onPress={this.navigateToLogged}>
              <Text style={styles.buttonText}>
                Entrar
               </Text>
             </TouchableOpacity>
           </View>
         </View>
      </ImageBackground>
    );
  }
}
