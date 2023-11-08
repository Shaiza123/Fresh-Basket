import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 15,
    paddingBottom: '10%',
  },
  backButtonContainer:{
    height: hp('5%'),
    width: wp('5%'),
    marginTop: '4%',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPassword: {
    fontSize: hp(1.5),
    color: '#000',
    textAlign: 'right',
    marginRight: '5%',
    textDecorationLine: 'underline'
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: '30%',
    height: 1,
    borderBottomWidth: 1,
    borderColor: '#707070',
    marginHorizontal: '1%',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '90%',
    borderRadius: wp('2%'),
  },
  buttonText: {
    fontSize: RFPercentage(2),
    color: '#707070',
  },
  register:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text:{
    fontSize: RFPercentage(2),
    color: '#1E1E1E',
  },
  registerText:{
   color: '#4CAF50',
   textDecorationLine: 'underline' 
  }

});