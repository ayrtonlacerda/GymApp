import { StyleSheet } from 'react-native';
import { colors, metric } from '../../styles';

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: 'rgba(6, 96, 140, 0.70)',
  },

  header: {
    //backgroundColor: colors.primary,
    padding: 14,
    paddingTop: 7,
    //justifyContent: 'center',
    //backgroundColor: colors.secundaryTranparent,
    alignItems: 'stretch',
    flexDirection: 'row', 
  },

  icon: {
    color: colors.white,
    alignSelf: 'flex-start',
  },

  viewIcon: {
    marginLeft: 4,
  },

  viewTitle: {
    flex: 1,
    //justifyContent: 'space-between',
    //alignItems: 'stretch',
    //marginLeft: 105, 
    justifyContent: 'center', 
    alignItems: 'center',
  },

  headerTitle: {
    color: colors.white,
    fontSize: 23,
    fontWeight: 'bold',
    justifyContent: 'center', 
    alignItems: 'center',
  },

  borders: {
    //margin: 1,
    height: 100,
    width: 100,
    borderRadius: metric.baseRadius,
  },

  cabecalhoTreinos: {
    flexDirection: 'row',
    marginTop: metric.baseMargin,
    marginLeft: metric.baseMargin,
    marginRight: metric.baseMargin,
    //justifyContent: 'center',
    flex: 1,
    backgroundColor: colors.secundaryTranparent,
    borderRadius: metric.baseRadius
  },

  textComponent: {
    //justifyContent: 'center',
    marginLeft: 10,
    marginTop: 45,
    //flexDirection: 'column',

  },

  viewGeral: {
    flexDirection: 'column',
  },

  viewGeral2: {
    marginTop: metric.baseMargin
  },

  viewAtributos: {
    //backgroundColor: colors.primary,
    padding: 14,
    paddingTop: 7,
    //marginTop: metric.baseMargin,  
    justifyContent: 'flex-start',
    backgroundColor: colors.secundaryTranparent,
    alignItems: 'center',
    flexDirection: 'column',
  },

  txtAtributos: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.white,
  },

  txtDescricaoAtributos: {
    fontSize: 15,
    color: colors.white,
  },

  imagemPerfil: {
    height: 180,  
    width: 180,    
    borderRadius: 70,
    alignItems: 'center', 
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
  },

  teste: {
    alignItems: 'center', 
    justifyContent: 'center',
  }

});

export default styles;
