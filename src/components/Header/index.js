import { View, Text} from 'react-native'
import React from 'react'
import styles from '../Header/style';

const Header = ({children}) => {
  return (
    <View style={styles.headingContainer}>
      <Text style = {styles.heading}>{children}</Text> 
    </View>
  )
}

export default Header