import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
  },
  searchContainer: {
    borderWidth: 1,
    borderColor: '#707070',
  },
  inputContainer: {
    alignItems: 'center',
  },
  input: {
    width: '85%',
    backgroundColor: 'transparent',
    fontSize: RFPercentage(2),
    height: hp(5),
  },
  image: {
    height: '100%',
    width: '100%',
  },
  saleTextContainer: {
    height: hp(20),
    width: hp(45),
    margin: hp(2),
  },
  saleText: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: hp(1),
  },
  text: {
    fontSize: RFPercentage(2.5),
    color: '#fff',
    fontWeight: '700',
    paddingVertical: hp(1),
    paddingHorizontal: hp(3),
    marginTop: hp(9),
  },  
  categories: {
    fontSize: RFPercentage(2.5),
    color: '#000',
    fontWeight: '700',
    marginHorizontal: hp(2.5),
  },
  categoryItem: {
    height: hp(13),
    width: hp(11.5),
    marginVertical: hp(2),
    paddingLeft: hp(2.5),
    paddingRight: hp(0.5),
    alignItems: 'center',
  },
  categoryImageContainer: {
    height: hp(10),
    width: hp(10),
  },
  categoryImage: {
    height: '100%',
    width: '100%',
  },
  categoryTitle: {
    fontSize: RFPercentage(1.8),
    color: '#000',
    fontWeight: '500',
  },
  itemList:{
    marginHorizontal: hp(2.5),
    justifyContent: 'space-between',
  }
});