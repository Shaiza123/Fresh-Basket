import { View, Image } from 'react-native'
import React from 'react'
import styles from '../Notification/style';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { IconButton } from 'react-native-paper';

const Notification = ({ children }) => {
    return (
        <IconButton style={styles.button} onPress={() => console.log('Pressed')} icon={children === 'Home' ? require("../../assets/prime_bell.png") : require("../../assets/prime_bell_n.png")} size={hp(3.5)} iconColor="#000" />
    )
}
export default Notification