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
    backgroundColor: colors.primary,
    padding: 14,
    paddingTop: 7,
    //justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginLeft: 105,
  },

  headerTitle: {
    color: colors.white,
    fontSize: 23,
    fontWeight: 'bold',
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

  modal: {
    flex: 1,
    backgroundColor: colors.primaryTransparent,
  }
});

export default styles;
