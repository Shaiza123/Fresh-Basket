import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    button: {
        height: hp('5%'),
        width: wp('7%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
});