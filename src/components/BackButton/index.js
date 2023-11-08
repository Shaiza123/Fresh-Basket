import { View } from 'react-native'
import React from 'react'
import styles from '../BackButton/style';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { IconButton } from 'react-native-paper';

const BackButton = ({ navigation }) => {
    return (
        <IconButton style={styles.button} onPress={() => navigation.goBack()} icon="arrow-left" size={hp(3.5)} iconColor="#38A91F" />
    )
}
export default BackButton