import { View,ScrollView, FlatList} from 'react-native'
import React,{useEffect} from 'react'
import styles from '../Favourite/style';
import TopHeader from '../../components/TopHeader/index'
import ItemList from '../../components/ItemList/index'
import { useSelector } from 'react-redux';

const Favourite = ({navigation}) => {  
  const data = useSelector((state) => state.data)
  console.log('jhsdcdic',data?.data)
  const [favouriteItem, setFavouriteItem] = React.useState(false)
  const favouriteItems = () => {
    let items = data?.data?.filter((item) => item.isFavourite === true)
    setFavouriteItem(items)
  }
  useEffect(() => {
    favouriteItems()
  }, [data?.data])
  return (
    <View style = {styles.container}>
       <TopHeader navigation={navigation} header1={'Favourites'} children={'Favourite'} />
       <View style={styles.itemList}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <FlatList
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        scrollEnabled={false}
                        data={favouriteItem}
                        numColumns={2}
                        renderItem={({ item }) => <ItemList data={item}/>}
                        keyExtractor={item => item.id}
                    />
                </ScrollView>
            </View>
    </View>
  )
}

export default Favourite