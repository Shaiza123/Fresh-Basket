import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { TextInput } from 'react-native-paper';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from '../TextinputScreen/style';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
const TextinputScreen = ({ children }) => {
    return children === 'Login' ? (
        <View>
            <Text style={styles.text}>Email</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    autoFocus={false}
                    placeholder="Email Your Email"
                    keyboardType="email-address"
                    underlineColor="transparent"
                    activeUnderlineColor='transparent'
                    textColor='#707070'
                    mode='outlined'
                    outlineColor='#4CAF50'
                    activeOutlineColor='#4CAF50'
                    theme={{roundness: 7}}
                    right={<TextInput.Icon icon={() => <AntDesign name="user" size={hp(2.5)} color="#000" />} />}
                />
            </View>
            <Text style={styles.text}>Password</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email Your Password"
                    secureTextEntry
                    activeUnderlineColor='transparent'
                    underlineColor="transparent"
                    textColor='#707070'
                    mode='outlined'
                    outlineColor='#4CAF50'
                    activeOutlineColor='#4CAF50'
                    theme={{roundness: 7}}
                    right={<TextInput.Icon icon={() => <SimpleLineIcons name="eye" size={hp(2.5)} color="#000" />} />}
                />
            </View>
        </View>

    ) :
        <View>
            <Text style={styles.text}>Email</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    autoFocus={false}
                    placeholder="Email Your Email"
                    keyboardType="email-address"
                    underlineColor="transparent"
                    activeUnderlineColor='transparent'
                    textColor='#707070'
                    mode='outlined'
                    outlineColor='#4CAF50'
                    activeOutlineColor='#4CAF50'
                    theme={{roundness: 7}}
                    right={<TextInput.Icon icon={() => <AntDesign name="user" size={hp(2.5)} color="#000" />} />}
                />
            </View>
            <Text style={styles.text}>First Name</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email First Name"
                    underlineColor="transparent"
                    activeUnderlineColor='transparent'
                    textColor='#707070'
                    mode='outlined'
                    outlineColor='#4CAF50'
                    activeOutlineColor='#4CAF50'
                    theme={{roundness: 7}}
                    right={<TextInput.Icon icon={() => <AntDesign name="user" size={hp(2.5)} color="#000" />} />}
                />
            </View>
            <Text style={styles.text}>Last Name</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    autoFocus={false}
                    placeholder="Email Last Name"
                    underlineColor="transparent"
                    activeUnderlineColor='transparent'
                    textColor='#707070'
                    mode='outlined'
                    outlineColor='#4CAF50'
                    activeOutlineColor='#4CAF50'
                    theme={{roundness: 7}}
                    right={<TextInput.Icon icon={() => <AntDesign name="user" size={hp(2.5)} color="#000" />} />}
                />
            </View>
            <Text style={styles.text}>Password</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email Your Password"
                    secureTextEntry
                    activeUnderlineColor='transparent'
                    underlineColor="transparent"
                    textColor='#707070'
                    mode='outlined'
                    outlineColor='#4CAF50'
                    activeOutlineColor='#4CAF50'
                    theme={{roundness: 7}}
                    right={<TextInput.Icon icon={() => <SimpleLineIcons name="eye" size={hp(2.5)} color="#000" />} />}
                />
            </View>
        </View>
}

export default TextinputScreen