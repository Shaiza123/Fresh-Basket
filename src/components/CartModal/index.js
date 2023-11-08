import { View, Text, TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'
import styles from '../CartModal/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux'
import { updateCart } from '../../redux/CartReducer';
import { TextInput } from 'react-native-paper';

const CartModal = (props) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(props?.data?.price);

    const increment = () => {
        setQuantity(quantity + 1);
        setTotalPrice((quantity + 1) * props?.data?.price);
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setTotalPrice((quantity - 1) * props?.data?.price);
        }
    };

    const addToCart = () => {
        dispatch(updateCart({ ...props?.data, quantity: quantity, totalPrice:totalPrice }))
        props?.closeModal()
    };
    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <TouchableOpacity style={styles.closeButton} onPress={props?.closeModal}>
                    <Ionicons name="close-circle-outline" size={30} color="#4CAF50" />
                </TouchableOpacity>
                <View style={styles.modalImageContainer} >
                    <Image source={props?.data?.image} style={styles.modalImage} resizeMode="contain" />
                </View>
                <Text style={styles.modalTitle}>{props?.data?.itemName}</Text>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity style={styles.button} onPress={decrement}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        textColor='#000'
                        value={quantity.toString()}
                        onChangeText={(text) => setQuantity(parseInt(text) || 1)}
                    />
                    <TouchableOpacity style={styles.button} onPress={increment}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.modalText}>Total Price: ${totalPrice}</Text>
                <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
                    <Text style={styles.addToCartText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartModal