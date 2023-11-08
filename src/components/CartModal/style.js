import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        margin: hp(2),
        backgroundColor: '#F9F6F7',
        borderRadius: hp(2),
        padding: hp(5),
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '80%', 
    },
    modalImageContainer: {
        width: hp(20),
        height: hp(20),
        marginBottom: 10,
    },
    modalImage: {
        width: '100%',
        height: '100%',
        marginBottom: hp(2),
    },
    modalTitle: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        color: '#4CAF50',
    },
    modalText: {
        textAlign: 'center',
        fontSize: RFPercentage(2),
        fontWeight: 'bold',
        color:'#000'
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: hp(2),
    },
    input: {
        width: hp(10),
        height: hp(5),
        borderColor: 'gray',
        borderWidth: 1,
        marginHorizontal: hp(1),
        textAlign: 'center',
        backgroundColor:'transparent',
    },
    button: {
        backgroundColor: '#4CAF50',
        borderRadius: hp(50),
        paddingHorizontal: hp(2),
        paddingVertical: hp(1),
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    closeButton: {
        position: 'absolute',
        top: hp(2),
        right: hp(2),
    },
    addToCartButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: hp(1),
        borderRadius: hp(1),
        marginTop: hp(2),
        width: '100%',
    },
    addToCartText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: RFPercentage(2),
        alignSelf: 'center',
    },
  });
  