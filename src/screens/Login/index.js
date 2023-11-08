import { View, Text, Image, TouchableOpacity,KeyboardAvoidingView,ScrollView} from 'react-native'
import React, { useEffect } from 'react'
import styles from '../Login/style';
import Header from '../../components/Header/index'
import Textinput from '../../components/TextinputScreen/index'
import ButtonScreen from '../../components/ButtonScreen/index'
import { Button } from 'react-native-paper';

const Login = ({navigation}) => {
  const navigateToHome = () => {
    navigation.navigate("DashBoard")
  }
  const handlePress = () => {
    navigation.navigate("Register")
  }
  return (
    <KeyboardAvoidingView style={{flex:1}}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
   >
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} resizeMode='contain' source={require("../../assets/logo.png")} />
      </View>
      <Header children={'Login'} />
      <Textinput children={'Login'} />
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <ButtonScreen children={'Login'} navigateToHome={navigateToHome}/>
      <View style={styles.lineContainer}>
        <View style={styles.line}></View>
        <View>
          <Text style={{color:'#000'}}>OR</Text>
        </View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode='contained' buttonColor={'#D9D9D9'} icon={() => (<Image source={require('../../assets/google_icon.png')}/>)} onPress={() => handlePress()} >
          <Text style={styles.buttonText}>Login With Google</Text>
        </Button>
      </View>
      <View style={styles.register}>
        <Text style={styles.text}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => handlePress()}>
          <Text style={styles.registerText}> Register</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Login