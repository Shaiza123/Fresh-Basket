import { View, Image, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../Home/style';
import TopHeader from '../../components/TopHeader/index'
import { TextInput } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { categories, categoryItems } from '../../utils/data'
import ItemList from '../../components/ItemList/index'
import ViewModal from '../../components/ViewModal/index';
import { useSelector } from 'react-redux';


function Item({ image, category, navigation }) {
  const data = useSelector((state) => state.data)
  const selectedCategoryItems = () => {
    let items = data?.data?.filter((item) => item.category === category)
    navigation?.navigate('DetailScreen', { data: items })

  }

  return (
    <TouchableOpacity onPress={selectedCategoryItems}>
      <View style={styles.categoryItem}>
        <View style={styles.categoryImageContainer}>
          <Image style={styles.categoryImage} resizeMode='contain' source={image} />
        </View>
        <Text numberOfLines={1} style={styles.categoryTitle}>{category}</Text>
      </View>
    </TouchableOpacity>
  );
}

const Home = ({ navigation }) => {
  const data = useSelector((state) => state.data)
  const [modalVisible, setModalVisible] = useState(false);
  const [popular, setPopular] = React.useState(false)
  const [item, setItem] = React.useState('')

  useEffect(() => {
    popularItems()
  }, [data?.data])

  const popularItems = () => {
    let items = data?.data?.filter((item) => item.popular === true)
    setPopular(items)
  }

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
      <TopHeader navigation={navigation} header1={'Welcome To'} header2={'Fresh Basket'} children={'Home'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoFocus={false}
            placeholder="Search"
            underlineColor="transparent"
            activeUnderlineColor='transparent'
            textColor='#D9D9D9'
            mode='outlined'
            outlineColor='#1E1E1E'
            activeOutlineColor='#1E1E1E'
            theme={{ roundness: 20 }}
            right={<TextInput.Icon icon={() => <Feather name="search" size={hp(2.5)} color="#000" />} />}
          />
          <View style={styles.saleTextContainer}>
            <Image style={styles.image} resizeMode='contain' source={require('./../../assets/image.png')} />
            <View style={styles.saleText}>
              <Text style={styles.text}>Enjoy your day {'\n'}Get Upto <Text style={{ color: '#F60000' }}>50% </Text> Off for you </Text>
            </View>
          </View>
        </View>
        <Text style={styles.categories}>Categories</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({ item }) => <Item image={item.image} category={item.category} navigation={navigation} />}
          keyExtractor={item => item.id}
        />
        <Text style={styles.categories}>Popular Products</Text>
        <View style={styles.itemList}>
          <FlatList
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            scrollEnabled={false}
            data={popular}
            numColumns={2}
            renderItem={({ item }) => <ItemList data={item} modalVisible={showModal} categoryItem={categoryItem} />}
            keyExtractor={item => item.id}
          />
        </View>
        <ViewModal closeModal={closeModal} modalVisible={modalVisible} data={item} />
      </ScrollView>
    </View>
  )
}

export default Home