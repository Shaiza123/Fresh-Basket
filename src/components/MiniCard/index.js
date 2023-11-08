import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../MiniCard/style';
import { Card } from 'react-native-paper';



const MiniCard = (props) => {
    const propsData = () => {
        props?.modalVisible()
        props?.categoryItem(props?.data)
    }
    return(
        <View style={{ ...styles.container, flexDirection: props?.myStyles?.cardFlexDirection }}>
            <Card style={{ ...styles.card, width: props?.myStyles?.cardWidth, height: props?.myStyles?.cardHeight }} onPress={propsData} >
                <View style={{ ...styles.image, width: props?.myStyles?.cardImageWidth, height: props?.myStyles?.cardImageHeight }}>
                    <Card.Cover source={props?.data?.image} style={styles.cardImage} resizeMode='contain' />
                </View>
            </Card>
            <View style={styles.cardContainer}>
                <Card.Content style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{props?.data?.itemName}</Text>
                    <Text style={styles.categoryPrice}>${props?.data?.totalPrice ? props?.data?.totalPrice : props?.data?.price}/ <Text style={styles.unit}>Kg</Text></Text>
                </Card.Content>
            </View>

        </View>
    )
}

export default MiniCard