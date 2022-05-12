import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../../../utils/colors';
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  button: {
    height: 40,
    borderRadius: 6,
    marginVertical: 4,
    width: width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  label: {
    color: COLORS.MAIN_PALETTE.WHITE,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
