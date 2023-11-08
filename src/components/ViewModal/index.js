import { View, Modal } from 'react-native'
import React from 'react'
import CartModal from '../../components/CartModal/index';

export default function ViewModal(props) {
  return (
    <View>
      <Modal
          animationType="slide"
          transparent={true}
          visible={props?.modalVisible}
          onRequestClose={props?.closeModal}
        >
          <CartModal 
          data={props?.data} 
          closeModal={props?.closeModal} />
        </Modal>
    </View>
  )
}
