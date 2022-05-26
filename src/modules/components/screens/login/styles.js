import {Dimensions, StyleSheet} from 'react-native';
import COLORS from '../../../../utils/colors';
const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    backgroundColor: COLORS.MAIN_PALETTE.DARK_BUT_NOT_BLACK,
  },
  backButton: {
    width: 30,
    height: 30,
  },
  alignCenter: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 26,
    marginVertical: 8,
    fontWeight: 'bold',
    color: COLORS.MAIN_PALETTE.WHITE,
  },
  text: {
    fontSize: 14,
    marginVertical: 6,
    color: COLORS.PRIMARY.LIGHT_GREY,
  },
  rowStyle: {
    marginVertical: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
