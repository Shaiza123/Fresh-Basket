import { View ,ScrollView, FlatList,Modal} from 'react-native'
import React, {useState,useEffect}from 'react'
import TopHeader from '../../components/TopHeader/index'
import ItemList from '../../components/ItemList/index'
import styles from '../DetailScreen/style'
import ViewModal from '../../components/ViewModal/index';
import { useSelector } from 'react-redux';

const DetailScreen = ({ navigation, route }) => {
    const data = useSelector((state) => state.data)
    const [modalVisible, setModalVisible] = useState(false);
    const [item, setItem] = React.useState('')
    const [cItems, setCItems] = React.useState(route?.params?.data)
    const categoryItem = (item) => {
        setItem(item)
     }
   
     const showModal = () => {
       setModalVisible(true);
     };
    
     const closeModal = () => {
       setModalVisible(false);
     };

     useEffect(() => {
        categoryItems()
      }, [data?.data])
    
      const categoryItems = () => {
        let items = data?.data?.filter((item) => item.category === route?.params?.data[0]?.category)
        setCItems(items)
      }
    return (
        <View style={styles.container}>
            <TopHeader navigation={navigation} header1={'Fresh'} header2={route?.params?.data[0]?.category} children={'DetailScreen'} />
            <View style={styles.itemList}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <FlatList
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        scrollEnabled={false}
                        data={cItems}
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