import { StyleSheet } from 'react-native';
import { colors, metric } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
  },

  header: {
    backgroundColor: colors.halfblack,
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },

  borders: {
    margin: 15,
    height: 100,
    width: 100
  },

  cabecalhoTreinos: {
    flexDirection: 'row',
    marginTop: metric.baseMargin * 3,
    marginLeft: metric.baseMargin,
    marginRight: metric.baseMargin,    
    //justifyContent: 'center',   
    flex: 1,
    backgroundColor: colors.darkTransparent,
    borderRadius: metric.baseRadius
  },

  textComponent: {
    //justifyContent: 'center',    
    marginLeft: 10,
    marginTop: 45,
    //flexDirection: 'column',

  },

  txtTipo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,    
  },

  txtDescricao: {
    fontSize: 16,
    color: colors.white,        
  },

  txtTreinoC: {
    fontSize: 20,
    color: colors.white,
    marginLeft: 10,
    marginTop: 35,
    flex: 1
  },

  body: {
    
  }
});

export default styles;
