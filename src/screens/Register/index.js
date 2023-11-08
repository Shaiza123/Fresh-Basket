import { View, Image,KeyboardAvoidingView,ScrollView,Platform} from 'react-native'
import React from 'react'
import styles from '../Register/style';
import Header from '../../components/Header/index'
import Textinput from '../../components/TextinputScreen/index'
import ButtonScreen from '../../components/ButtonScreen/index'
import BackButton from '../../components/BackButton/index'

const Register = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={{flex:1}}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
   >
    <ScrollView contentContainerStyle={{flexGrow:1}}>
    <View style = {styles.container}>
      <BackButton navigation={navigation}/>
      <View style = {styles.imageContainer}>
      <Image style={styles.image} resizeMode='contain' source={require("../../assets/logo.png")}/>
      </View>
      <Header children={'Register'}/>
      <Textinput/>
      <ButtonScreen children={'Register'}/>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Register