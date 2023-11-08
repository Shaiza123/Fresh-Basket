import { View, Text } from 'react-native'
import React from 'react'
import styles from '../ButtonScreen/style';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button } from 'react-native-paper';

const ButtonScreen = ({ children, navigateToHome, modalVisible, isDisabled }) => {
    const modal = () => {
        modalVisible();
    }
    return (
        <View style={[styles.container, { top: hp('1%') }]}>
            <Button style={[styles.button, { borderColor: isDisabled ? '#d9d9d9' : '#000' }]} mode='contained' buttonColor={'#38A91F'} onPress={() => {
                if (children === 'Login') {
                    navigateToHome();
                } else if (children === 'Make Payment') {
                    modal();
                }
                else {
                    console.log('else');
                }
            }}
                disabled={isDisabled ? true : false}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Button>
        </View>
    )
}
export default ButtonScreen