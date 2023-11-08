import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";

export default styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text1:{
        fontSize: RFPercentage(3),
        color: '#000',
        fontWeight: 'bold',
    },
    text2:{
        fontSize: RFPercentage(3),
        color: '#63B23D',
        fontWeight: 'bold',
    },
    
});