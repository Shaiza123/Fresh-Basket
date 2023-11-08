import { View, Modal, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import styles from '../LoaderModal/style';
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function LoaderModal(props) {
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props?.modalVisible}
                onRequestClose={props?.closeModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <LottieView style={styles.lottie} source={require('../../assets/loader.json')} autoPlay loop={false} />
                        <Text style={styles.modalText}>Order Completed Successfully.</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={props?.closeModal}>
                            <Text style={styles.okText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
