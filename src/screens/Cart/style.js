import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    addressContainer:{
      backgroundColor: '#D9D9D9',
      padding: hp(2),
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    addressHeading:{
      fontSize: RFPercentage(1.9),
      color: '#000',
      fontWeight: '700',
    },
    addressText:{
      fontSize: RFPercentage(1.5),
      color: '#000',
      fontWeight:'300'
    },
    itemsContainer:{
      paddingHorizontal: hp(2.5),
      paddingVertical:hp(1.5)
    },
    heading:{
      fontSize: RFPercentage(2.5),
      color: '#000',
      fontWeight: '700',
    },
    itemList:{
      justifyContent: 'space-between',
    },
    textContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    textHeading:{
      color:'#707070'
    },
    text:{
      color:'#000'
    },
    bottomContainer:{
    alignSelf: 'flex-end',
    width: '100%',
    height: hp(25),
    borderTopRightRadius: hp(3),
    borderTopLeftRadius: hp(3),
    backgroundColor:'#fff'
    }

  });