import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    card: {
        height: hp(9.5),//height: hp(10),
        width: hp(9.5),//width: hp(10),
        margin: hp(1),
        elevation: 4,
        marginBottom: 10,
        backgroundColor: "#DBDBDB",
        alignItems: 'center',//align-item
        justifyContent: 'center',
        
    },
    image:{       
        width: hp(7.5),//width: hp(8),
        height: hp(7.5),//height: hp(8),  
    },
    cardImage: {
        height: '100%',
        width: '100%', 
        backgroundColor: "#DBDBDB",     
    },
    cardContent: {
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: RFPercentage(1.5),
        color: '#000',
        fontWeight: '500',
        textAlign: 'center',
    },
    categoryPrice: {
        fontSize: RFPercentage(1.5),
        color: '#4CAF50',
        fontWeight: '500',
    },
    unit:{
        color: '#000',
    },
    cardContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'column',// flexDirection: 'column',
    },

});