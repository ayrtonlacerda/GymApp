import { StyleSheet } from 'react-native';
import { colors, metric } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },

  header: {
    backgroundColor: colors.primary,
    padding: 14,
    paddingTop: 7,
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
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
    marginLeft: 120,
  },

  headerTitle: {
    color: colors.white,
    fontSize: 23,
    fontWeight: 'bold',

  },

  body: {
    alignItems: 'center'
  }
});

export default styles;
