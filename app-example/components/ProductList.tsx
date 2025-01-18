import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/redux"
import { productList, useProductList } from "@/app-example/hooks/productHooks"
import { useNavigation } from "expo-router"

export default function ProductList() {
    const { error, isLoading, data } = useProductList()
    const searchTerm = useSelector((state: RootState) => state.search.bar)      // buat search produk
    const navigate = useNavigation()
    const [viewMode, setView] = useState('list')
    const theme = useSelector((state: RootState) => state.theme.theme)


    const filterSearch = Array.isArray(data)                                // sama (filter searching)
        ? data.filter((item: productList) =>
              item?.title?.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : [];

    // console.log('data', data)

    const getStyleproductContainer = () => {
        if (viewMode === 'list') {
            return theme === 'light' ? styleLight.temp : styleDark.temp
        } else {
            return theme === 'light' ? styleLight.productContainerGrid: styleDark.productContainerGrid 
        }
    };


    const getStyleProductBox = () => {
        if(viewMode === 'list'){
            return theme === 'light' ? styleLight.productBoxList : styleDark.productBoxList
        }else {
            return theme === 'light' ? styleLight.productBoxGrid: styleDark.productBoxGrid
        }
    }

    if (isLoading) {
        return <Text>Loading...</Text>
    }

    if (error) {
        return <Text>Error</Text>
    }

    return (
        <View style={styleLight.main}>
            <TouchableOpacity style={ theme ==='light' ? styleLight.choiceTampilan : styleDark.choiceTampilan} onPress={() => setView(viewMode === 'list' ? 'grid' : 'list')}>
                
                <Text style={theme ==='light' ? styleLight.listIndicator : styleDark.listIndicator}>{viewMode === 'list' ? 'G' : 'L'}</Text>
                
                
                
             </TouchableOpacity>
            
            <FlatList
                key={viewMode}
                data={filterSearch} 
                numColumns={viewMode === 'list' ? 1 : 2}
                keyExtractor={(item) => item.id.toString()}  
                renderItem={({ item }) => (
                    <View style={getStyleproductContainer()}  >
                        <TouchableOpacity 
                        style={getStyleProductBox()}  
                        onPress={() => navigate.navigate('productDetail', { productId: item.id })}>


                        <Image source={{ uri: item.image }} style={viewMode === 'list' ? styleLight.productImageList : styleDark.productImageGrid} />
                        <View style={theme === 'light' ? styleLight.textContainer : styleDark.textContainer}>
                            <Text style={theme === 'light' ? styleLight.productTitle : styleDark.productTitle} numberOfLines={4}>{item.title}</Text>
                            <Text style={theme === 'light' ? styleLight.productPrice : styleDark.productPrice}>${item.price}</Text>

             
                        </View>
         
                        </TouchableOpacity>
                    </View>
                    
                )}
                showsVerticalScrollIndicator={false}


            />
        </View>
    );
}

const styleLight = StyleSheet.create({
    main: {
     
    
        paddingBottom: 380
    },
    productBoxList: {
        backgroundColor: "white",
        width: 320,
        height: 120,
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
        marginLeft: 40,
        marginTop: 20,
        flexDirection: "row",
        flexShrink: 1,
        boxShadow : '0 0 10px rgba(0,0,0,0.4)',
    },
    productImageList: {
        width : 100,
        height : 100,
        padding : 10,
    },
    productTitle : {
        fontSize : 15,
        marginLeft : 8,
        fontWeight : 'bold',
    },
    productPrice : {
        fontSize : 15,
        marginLeft : 8,
    },
    textContainer : {
        flex : 1,

    },
    choiceTampilan : {
        width : 50,
        height : 50,
        backgroundColor : 'transparent',
        left : 320,
        bottom : 90,
        borderRadius : 20,
        borderColor : 'black',
        borderWidth : 1,
 

    },
    listIndicator : {
        textAlign : 'center',
        fontSize : 30,
        fontWeight : 'bold',
    
    },

    productBoxGrid: {
        height: 250,
        width: 165, 
    
        marginTop: 20,
        padding: 10,
        marginLeft: 15,
        marginRight: 20, 
        boxShadow : '0 0 10px rgba(0,0,0,0.4)',
        borderRadius: 10,
    },

    productImageGrid : {
        width : 100,
        height : 100,
        padding : 10,
    },
    temp : {
        
    },
    productContainerGrid: {

    },
    
});

const styleDark = StyleSheet.create({

    productBoxList: {
        backgroundColor: "#1f1f1f",
        width: 320,
        height: 120,
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
        marginLeft: 40,
        marginTop: 20,
        flexDirection: "row",
        flexShrink: 1,

        boxShadow: '0 0 10px rgba(255, 255, 255, 0.4)',
    },
    productImageList: {
        width : 100,
        height : 100,
        padding : 10,
    },
    productTitle : {
        fontSize : 15,
        marginLeft : 8,
        fontWeight : 'bold',
        color : 'white'
    },
    productPrice : {
        fontSize : 15,
        marginLeft : 8,
        color : 'white'
    },
    textContainer : {
        flex : 1,

    },
    choiceTampilan : {
        width : 50,
        height : 50,
        backgroundColor : 'transparent',
        left : 320,
        bottom : 90,
        borderRadius : 20,
        borderColor : 'white',
        borderWidth : 1,
 

    },
    listIndicator : {
        textAlign : 'center',
        fontSize : 30,
        fontWeight : 'bold',
        color : 'white'
    
    },

    productBoxGrid: {
        height: 250,
        width: 165, 
    
        marginTop: 20,
        padding: 10,
        marginLeft: 15,
        marginRight: 20, 
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.4)',
        borderRadius: 10,
    },

    productImageGrid : {
        width : 100,
        height : 100,
        padding : 10,
    },
    temp : {

    },
    productContainerGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        backgroundColor : '#1f1f1f',

    },
    
});
