import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export default styles = StyleSheet.create({
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#D9D9D9",
    paddingVertical: '3%',
  },
  heading: {
    color: '#4CAF50',
    fontSize: RFPercentage(3),
    fontWeight: 'bold',
  },

});