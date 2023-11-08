import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../ItemList/style';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Card } from 'react-native-paper';
import Foundation from 'react-native-vector-icons/Foundation'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch } from 'react-redux'
import { updateFavourites } from '../../redux/DataReducer';

const ItemList = (props) => {
    const dispatch = useDispatch()
  
    const propsData = () => {
        props?.modalVisible()
        props?.categoryItem(props?.data)
    }
    
    const favourites = () => {
        dispatch(updateFavourites({ ...props?.data}))
    }

    return (
        <Card style={styles.card}>
            <View style={styles.icon}>
                <TouchableOpacity onPress={favourites}>
                    <Foundation name="heart" size={hp(3.4)} color={props?.data?.isFavourite?"red":"#4CAF50"} />
                </TouchableOpacity>
            </View>
            <View style={styles.image}>
                <Card.Cover source={props?.data?.image} style={styles.cardImage} resizeMode='contain' />
            </View>
            <View style={styles.cardContainer}>
                <Card.Content style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{props?.data?.itemName}</Text>
                    <Text style={styles.categoryPrice}>${props?.data?.price}/ <Text style={styles.unit}>Kg</Text></Text>
                </Card.Content>
                <View style={styles.icon}>
                    <TouchableOpacity
                        onPress={propsData}
                    >
                        <AntDesign name="pluscircle" size={hp(3)} color="#63B23D" />
                    </TouchableOpacity>
                </View>
            </View>
        </Card>
    )
}

export default ItemList