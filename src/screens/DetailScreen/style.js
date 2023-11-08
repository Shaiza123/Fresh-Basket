import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    marginBottom: hp(9),
  },
  itemList: {
    marginHorizontal: hp(2.5),
  },
});