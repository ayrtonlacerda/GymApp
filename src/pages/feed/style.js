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
  }
});

export default styles;
