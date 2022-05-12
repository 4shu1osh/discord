import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../../../../utils/colors";
const {width} = Dimensions.get('screen');


const styles = StyleSheet.create({
    button: {
        height: 50,
        borderRadius: 6,
        width: width*0.90,
        marginVertical: 6,
        alignItems: 'center',
        justifyContent: 'center',

    },
    label: {
        color: COLORS.MAIN_PALETTE.WHITE,
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default styles;