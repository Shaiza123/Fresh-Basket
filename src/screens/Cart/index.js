import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../Cart/style';
import TopHeader from '../../components/TopHeader/index'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MiniCard from '../../components/MiniCard/index'
import CartItem from '../../components/CartItem/index'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ButtonScreen from '../../components/ButtonScreen/index'
import { useSelector } from 'react-redux';
import ViewModal from '../../components/ViewModal/index';
import LoaderModal from '../../components/LoaderModal/index';

const Cart = ({ navigation }) => {
  const cart = useSelector((state) => state.cart)
  const data = useSelector((state) => state.data)
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modal, setModal] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [item, setItem] = React.useState('')
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [taxAndOther, setTaxAndOther] = useState(0);


  useEffect(() => {
    let subtotal = 0;
    cart?.cart?.forEach((item) => {
      subtotal = item?.totalPrice + subtotal;
    });

    if (cart?.cart?.length > 0) {
      setDeliveryFee(32);
      setTaxAndOther(18);
    }
    const total = subtotal + deliveryFee + taxAndOther;

    setSubTotal(subtotal);
    setTotal(total);
  }, [cart?.cart]);


  useEffect(() => {
    if (cart?.cart?.length === 0) {
      setIsDisabled(true);
    }
    else {
      setIsDisabled(false);
    }

  }, [cart?.cart]);

  const categoryItem = (item) => {
    setItem(item)
  }


  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const viewModal = () => {
    setModal(true);
  };

  const cancelModal = () => {
    setModal(false);
  };

  const myStyles = {
    cardFlexDirection: 'column',
    cardWidth: hp(9.5),
    cardHeight: hp(9.5),
    cardImageWidth: hp(7.5),
    cardImageHeight: hp(7.5),
  }
  return (
    <View style={styles.container}>
      <TopHeader navigation={navigation} header1={'Cart'} children={'Cart'} />
      <View style={styles.addressContainer}>
        <Ionicons name="location-outline" size={30} color="#000" />
        <Text style={styles.addressHeading}>Delivery <Text style={{ color: '#4CAF50' }}> Address </Text> {'\n'} <Text style={styles.addressText}>2nd Cross, 1st Main HSR Layout,Bengaluru.</Text></Text>
        <MaterialIcons name="keyboard-arrow-right" size={30} color="#000" />
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.itemsContainer}>
          <Text style={styles.heading}>Items In Cart :</Text>
          {cart?.cart?.length === 0 ?
            <View style={styles.textContainer}>
              <Text style={styles.textHeading}>No item is avaliable in Cart.</Text>
            </View>
            :
            <FlatList
              scrollEnabled={false}
              rowWrapperStyle={{ justifyContent: 'space-between' }}
              data={cart?.cart}
              renderItem={({ item }) => <CartItem data={item} />}
              keyExtractor={item => item.id}
            />
          }
        </View>
        <View style={styles.itemsContainer}>
          <Text style={styles.heading}>Add More Items :</Text>
          <View style={styles.itemList}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              rowWrapperStyle={{ justifyContent: 'space-between' }}
              data={data?.data}
              renderItem={({ item }) => <MiniCard data={item} myStyles={myStyles} modalVisible={showModal} categoryItem={categoryItem} />}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View style={styles.itemsContainer}>
          <Text style={styles.heading}>Bill Details :</Text>
          <View style={styles.textContainer}>
            <Text style={styles.textHeading}>Sub Total</Text>
            <Text style={styles.text}>${subTotal}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textHeading}>Delivery Fee</Text>
            <Text style={styles.text}>${deliveryFee}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textHeading}>Tax & Other Fee</Text>
            <Text style={styles.text}>${taxAndOther}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textHeading}>Total</Text>
            <Text style={styles.text}>${total}</Text>
          </View>
        </View>
        <ButtonScreen children={'Make Payment'} modalVisible={viewModal} isDisabled={isDisabled} />
      </View>
      <LoaderModal closeModal={cancelModal} modalVisible={modal} />
      <ViewModal closeModal={closeModal} modalVisible={modalVisible} data={item} />

    </View>
  )
}

export default Cart