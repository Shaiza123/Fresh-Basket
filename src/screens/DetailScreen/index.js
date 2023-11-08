import { View ,ScrollView, FlatList,Modal} from 'react-native'
import React, {useState}from 'react'
import TopHeader from '../../components/TopHeader/index'
import ItemList from '../../components/ItemList/index'
import styles from '../DetailScreen/style'
import ViewModal from '../../components/ViewModal/index';

const DetailScreen = ({ navigation, route }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [item, setItem] = React.useState('')
    const categoryItem = (item) => {
        setItem(item)
     }
   
     const showModal = () => {
       setModalVisible(true);
     };
    
     const closeModal = () => {
       setModalVisible(false);
     };
    return (
        <View style={styles.container}>
            <TopHeader navigation={navigation} header1={'Fresh'} header2={route?.params?.data[0]?.category} children={'DetailScreen'} />
            <View style={styles.itemList}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <FlatList
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        scrollEnabled={false}
                        data={route?.params?.data}
                        numColumns={2}
                        renderItem={({ item }) => <ItemList data={item} modalVisible={showModal} categoryItem={categoryItem} />}
                        keyExtractor={item => item.id}
                    />
                </ScrollView>
            </View>
            <ViewModal closeModal={closeModal} modalVisible={modalVisible} data={item}/>
        </View>
    )
}

export default DetailScreen