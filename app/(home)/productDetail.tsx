import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, Modal } from 'react-native'
import React, { useState } from 'react'
import { useProductDetail } from '@/app-example/hooks/productHooks'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux'
import { addCoin, minCoins } from '@/redux/wallet'
import { addProduct, removeProduct } from '@/redux/boughtProduct'



export default function productDetail() {
  const route = useRoute<any>()
  const navigate = useNavigation()
  const dispatch = useDispatch()
  const { productId } = route.params 
  

  const theme = useSelector((state: RootState) => state.theme.theme)
  const {error, isLoading, data} = useProductDetail(productId)
  const ownedProduct = useSelector((state: RootState) => state.products.product)
  const coins = useSelector((state: RootState) => state.wallet.coins)
  const owned = ownedProduct.some((product) => product.id === productId)
  const price = data?.price ?? 0

  const [imageFullScreen, setImageFullScreen] = useState(false)

  
  if (isLoading) {
      return <Text>Loading...</Text>
  }

  if (error) {
      return <Text>Error</Text>
  }
  // const boldedscuces = () => {
  //   return <Text style={{fontWeight : 'bold'}}>Success !</Text>
  // }

  const HandleStatus = () => {
    console.log('owned')
    if (owned){
      dispatch(addCoin(price))
      dispatch(removeProduct(data))
      Alert.alert (
        'Success !',
        `${data?.title} was sold successfully, your current balance is ${coins + price}`
      );
    }else{
      if(coins >= price){
        dispatch(minCoins(price))
        dispatch(addProduct(data))
        Alert.alert (
          'Success !',
          `${data?.title} was bought successfully, your current balance is ${coins - price}`
  
        )
      }else{
        Alert.alert('No Coins', 'You do not have enough coins to buy this product.');
      }
    }
  }
  
 
 
  // console.log("productDetail", data)
  
  
  return (
    <View style={theme === 'light' ? styleLight.container : styleDark.container}>
      
      <View style={theme === 'light' ? styleLight.header : styleDark.header}>
        <TouchableOpacity onPress={() => navigate.goBack()} style={theme === 'light' ? styleLight.backButton : styleDark.backButton}>
          <Text style={theme === 'light' ? styleLight.backButtonText : styleDark.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={theme === 'light' ? styleLight.headerTitle : styleDark.headerTitle} numberOfLines={1}>
          {data?.title}
        </Text>
      </View>

      {/* Product Details */}
      <TouchableOpacity onPress={() => setImageFullScreen(true)}>
        <Image source={{ uri: data?.image }} style={styleLight.productImage} />
      </TouchableOpacity>

    
      <Text style={theme === 'light' ? styleLight.productName : styleDark.productName}>{data?.title}</Text>
      <Text style={theme === 'light' ? styleLight.textInfo : styleDark.textInfo}>Price </Text>
      <Text style={theme === 'light' ? styleLight.productPrice : styleDark.productPrice}>${data?.price}</Text>
      <Text style={theme === 'light' ? styleLight.textInfo : styleDark.textInfo}>Description </Text>
      <Text style={theme === 'light' ? styleLight.productDescription : styleDark.productDescription}>{data?.description}</Text>
      <TouchableOpacity 
        style={owned ? styleLight.SellButton : styleLight.BuyButton} 
        onPress={HandleStatus}>
          <Text style={theme === 'light' ? styleLight.BuySellText : styleDark.BuySellText}>{owned ? 'Sell' : 'Buy'}</Text>

      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={imageFullScreen}
        onRequestClose={() => setImageFullScreen(false)}
      >
        <TouchableOpacity style={styles.imageModalContainer} onPress={() => setImageFullScreen(false)}>
          <Image source={{ uri: data?.image }} style={styles.fullScreenImage} />
        </TouchableOpacity>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  imageModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  fullScreenImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

const styleLight = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 16,
  },
  backButton: {
    marginRight: 10,

  },
  backButtonText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',

  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginTop: 3,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 16,


  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    color: '#228B22',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#555',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInfo : {
    fontSize: 20,
    fontWeight: 'bold',
  },
  BuyButton : {
    width : '100%',
    height : 70,
    backgroundColor : 'blue',
    bottom : 20,
    left : 17,
    position : 'absolute',
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center',
    
  },
  SellButton : {
    width : '100%',
    height : 70,
    backgroundColor : 'red',
    bottom : 20,
    left : 17,
    position : 'absolute',
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center',
    
  },
  

  BuySellText : {
    fontSize : 20,
    color : 'white',
    fontWeight : 'bold'
  }
});


const styleDark = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 16,
  },
  backButton: {
    marginRight: 10,
    color: 'white',
  },
  backButtonText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',

  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginTop: 3,
    color: 'white',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 16,


  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  productPrice: {
    fontSize: 20,
    color: '#228B22',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    color: 'white',
  
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  textInfo : {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  BuyButton : {
    width : '100%',
    height : 70,
    backgroundColor : 'blue',
    bottom : 20,
    left : 17,
    position : 'absolute',
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center',
    
  },
  SellButton : {
    width : '100%',
    height : 70,
    backgroundColor : 'red',
    bottom : 20,
    left : 17,
    position : 'absolute',
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center',
    
  },
  

  BuySellText : {
    fontSize : 20,
    color : 'black',
    fontWeight : 'bold'
  }
});
