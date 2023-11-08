import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../TopHeader/style';
import BackButton from '../../components/BackButton/index'
import Notification from '../../components/Notification/index'

const TopHeader = ({ navigation, header1, header2 ,children}) => {
    return (
        <View style ={styles.header}>
            <BackButton navigation={navigation}/>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.text1}>{header1}</Text>
            <Text style={styles.text2}> {header2}</Text>
            </View>
            <Notification children={children}/>
        </View>
    )
}
export default TopHeader