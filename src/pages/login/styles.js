import { StyleSheet } from 'react-native';
import { colors, metric } from '../../styles';

const style = StyleSheet.create({
 ImageBackground: {
   flex: 1,
 },

 container: {
   flex: 1,
   alignItems: 'stretch',
   justifyContent: 'center',
   padding: metric.basePadding * 2,
   backgroundColor: colors.primaryTransparent,
 },

 image: {
   marginBottom: metric.baseMargin * 4,
   alignSelf: 'center',
 },

 input: {
    backgroundColor: colors.whiteTransparent,
    borderRadius: metric.baseRadius,
    marginTop: metric.baseMargin / 4,
    height: 50,
    paddingHorizontal: metric.basePadding,
  },

  button: {
    backgroundColor: colors.secundaryTranparent,
    borderRadius: metric.baseRadius,
    height: 50,
    marginTop: metric.baseMargin * 2,
    paddingHorizontal: metric.basePadding,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },

  estiloPicker: {
    //height: 50,
    //paddingHorizontal: metric.basePadding,
    flex: 7,
    },

  forms2: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    padding: metric.basePadding,
    borderRadius: metric.baseRadius,
    marginTop: metric.baseMargin / 3,
    backgroundColor: colors.whiteTransparent
  },

  textUnidade: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  }
});

export default style;
