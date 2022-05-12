import {Dimensions, StyleSheet} from 'react-native';
import COLORS from '../../../../utils/colors';
const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.MAIN_PALETTE.DARK_BUT_NOT_BLACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImg: {
    height: height * 0.60,
    resizeMode: 'contain',
    marginBottom: 20
  },
});

export default styles;
