import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';


export default class Login extends Component {

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
        <View style={styles.container}>

          <Image style={styles.image} source={require('../../assents/imgs/corpofit.png')} />

          <View style={styles.forms}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Digite seu usuario"
              underlineColorAndroid="rgba(0,0,0,0)"
            />
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Digite sua Senha"
              underlineColorAndroid="rgba(0,0,0,0)"
              textContentType="password"
            />

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
