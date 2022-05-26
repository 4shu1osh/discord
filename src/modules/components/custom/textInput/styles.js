import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../../../../utils/colors";
const {height, width} = Dimensions.get('screen');


const styles = StyleSheet.create({
    input: {
        height: height*0.07,
        borderRadius: 6,
        width: width*0.90,
        marginVertical: 6,
    },
    label: {
        color: COLORS.MAIN_PALETTE.WHITE,
        fontSize: 14,
        fontWeight: 'bold'
    },
    errMsg: {
        alignSelf: 'flex-end',
        color: COLORS.PRIMARY.RED
    }
})

export default styles;