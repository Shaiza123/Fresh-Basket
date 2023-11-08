import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    icon:{
        alignItems: 'flex-end',
        paddingVertical: hp(0.9),
        paddingHorizontal: hp(1),
    },
    card: {
        height: hp(25),
        width: hp(20),
        margin: hp(1),
        elevation: 4,
        marginBottom: 10,
        backgroundColor: "#DBDBDB",
        borderWidth: hp(0.2),
        borderColor: '#63B23D'
    },
    categoryPrice: {
        fontSize: RFPercentage(1.8),
        color: '#4CAF50',
        fontWeight: '500',
    },
    image:{
        alignSelf: 'center',
        width: hp(12),
        height: hp(12),    
    },
    cardImage: {
        height: '100%',
        width: '100%', 
        backgroundColor: "#DBDBDB",     
    },
    cardContent: {
        alignItems: 'flex-start',
    },
    cardTitle: {
        fontSize: RFPercentage(1.8),
        color: '#000',
        fontWeight: '500',
        textAlign: 'center',
    },
    unit:{
        color: '#000',
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp(2),
    },

});