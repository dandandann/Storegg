import { View, TextInput, StyleSheet} from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchProduct } from '@/redux/searchFeature'
import { RootState } from '@/redux'



export default function searchBar() {
  const dispatch = useDispatch()

  const theme = useSelector((state:RootState) => state.theme.theme)

  

  const searching = (text: string) => {
    dispatch(searchProduct(text))
  };


  return (
    <View style={theme === 'light' ? styleLight.container : styleDark.container}>

      <TextInput style={theme === 'light' ? styleLight.input : styleDark.input} 
      placeholder="Search..." placeholderTextColor={theme === 'light' ? 'black' : 'white'} 
      onChangeText={searching} />
    </View>
  )
}

const styleLight = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        height : 10,
        width : '100%',
        
    },
    input : {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        marginTop: 20
    },
 
})


const styleDark = StyleSheet.create({
  container : {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
      height : 10,
      width : '100%',
      
  },
  input : {
      height: 40,
      width: '90%',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      backgroundColor: '#1f1f1f',
      marginTop: 20,
      color: 'white'
  },

})
