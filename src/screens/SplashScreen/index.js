import { View, ImageBackground} from 'react-native'
import React, {useEffect} from 'react'
import styles from '../SplashScreen/style';

const SplashScreen = ({navigation}) => {
  useEffect(() =>{
    setTimeout(() => {
      navigation.navigate("Login")
    }, 3000);
  },[]);
  return (
    <View style = {styles.container}>
      <ImageBackground style = {styles.image} resizeMode='stretch' source={require('../../assets/Splash.png')} >
        </ImageBackground>
    </View>
  )
}

export default SplashScreen