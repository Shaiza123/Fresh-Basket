import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import styles from '../CartItem/style';
import MiniCard from '../MiniCard/index'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux'
import { increment, decrement} from '../../redux/CartReducer';
import { TextInput } from 'react-native-paper';


const CartItem = (props) => {
    const dispatch = useDispatch()
    const increaseQuantity = () => {
        dispatch(increment(props?.data))
    }
    const decreaseQuantity = () => {
        dispatch(decrement(props?.data))
    }

    const myStyles = {
        cardFlexDirection: 'row',
        cardWidth: hp(8),
        cardHeight: hp(8),
        cardImageWidth: hp(6),
        cardImageHeight: hp(6),
    }
    return (
        <View style={styles.container}>
            <MiniCard myStyles={myStyles} data={props?.data} />
            <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={decreaseQuantity}>
                    <Text style={styles.textFont}>-</Text>
                </TouchableOpacity>
                <TextInput
                    editable={false}
                    activeUnderlineColor='transparent'
                    underlineColor="transparent"
                    style={styles.quantity}
                    value={props?.data?.quantity.toString()}
                />
                <TouchableOpacity onPress={increaseQuantity}>
                    <Text style={styles.textFont}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartItem