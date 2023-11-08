import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    inputContainer:{
        alignItems:'center',
    },
    input: {     
        width:'90%',
        backgroundColor:'transparent',
        fontSize:RFPercentage(1.5),
        height:hp(5),
    },
    text:{
        fontSize:RFPercentage(2),
        color:'#000',
        marginVertical: '2%',
        marginLeft:'5%',
    }
  });