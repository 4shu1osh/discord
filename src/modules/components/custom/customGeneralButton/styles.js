const {width} = Dimensions.get('screen');
import COLORS from '../../../../utils/colors';
import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: 40,
    borderRadius: 6,
    marginVertical: 8,
    width: width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.MAIN_PALETTE.WHITE,
  },
});

export default styles;
