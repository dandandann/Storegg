import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux'
import { useNavigation } from 'expo-router'

export default function myProduct() {
  const boughtProductInfo = useSelector((state: RootState) => state.products.product)
  const navigate = useNavigation()
  const theme = useSelector((state: RootState) => state.theme.theme)


  return (
    <View style={theme === 'light' ? stylesLight.main : styleDark.main}>
      <View style={theme === 'light' ? stylesLight.header : styleDark.header}>
        <TouchableOpacity onPress={() => navigate.goBack()} style={ theme === 'light' ? stylesLight.backButton : styleDark.backButton}>
          <Text style={theme === 'light' ? stylesLight.backButtonText : styleDark.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={theme === 'light' ? stylesLight.headerTitle : styleDark.headerTitle}>My Products</Text>
      </View>
          <FlatList
              data={boughtProductInfo}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (


                <View style={theme === 'light' ? stylesLight.productContainer : styleDark.productContainer}>
                    <Image source={{ uri: item.image }} style={stylesLight.productImage} />
                    <View style={theme === 'light' ? stylesLight.textContainer : styleDark.textContainer}>
                        <Text style={theme === 'light' ? stylesLight.productTitle : styleDark.productTitle}>{item.title}</Text>
                        <Text style={theme === 'light' ? stylesLight.productPrice : styleDark.productPrice}>${item.price}</Text>
                    </View>
                </View>


                )}


                showsVerticalScrollIndicator={false}
            />
    </View>
  )
}


const stylesLight = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginBottom: 16,
        flexDirection: 'row',
    },
    headerTitle: {
        fontSize: 34,
        fontWeight: 'bold',
    },
    productContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    productImage: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 16,
        color: 'green',
    },
    backButton: {
      marginRight: 10,
  
    },
    backButtonText: {
      fontSize: 30,
      color: 'black',
      fontWeight: 'bold',
  
    },
});


const styleDark = StyleSheet.create({
  main: {
      width: '100%',
      height: '100%',
      padding: 16,
      backgroundColor: '#1f1f1f',
  },
  header: {
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      marginBottom: 16,
      flexDirection: 'row',
  },
  headerTitle: {
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold',
  },
  productContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#1f1f1f',
      borderRadius: 10,
      boxShadow: '0 0 10px rgba(255, 255, 255, 0.4)',
    },
  productImage: {
      width: 100,
      height: 100,
      marginRight: 10,
  },
  textContainer: {
      flex: 1,
  },
  productTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color:'white'
  },
  productPrice: {
      fontSize: 16,
      color: 'green',
  },
  backButton: {
    marginRight: 10,

  },
  backButtonText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    
  },
});

