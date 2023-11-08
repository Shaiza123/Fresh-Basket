import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   quantityContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#D9D9D9',
      width: hp(12),
      height: hp(3.5),
      borderRadius: hp(50),
   },
   quantity:{
      width: hp(4),
      height: hp(5),
      marginHorizontal: hp(1),
      backgroundColor:"transparent"
   },
   textFont:{
      fontSize:RFPercentage(2),
      color:'#000'
   }

});