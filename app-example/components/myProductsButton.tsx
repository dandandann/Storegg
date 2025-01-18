import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux'

export default function MyProductsButton() {
  const navigate= useNavigation()
  const theme = useSelector((state : RootState)  => state.theme.theme)
  
  
  const pressButton = () => {
    navigate.navigate('myProduct')
  };

  return (
    <View>
    <TouchableOpacity style={theme === 'light' ? styleLight.floatInfo : styleDark.floatInfo} onPress={pressButton}>
      <Text style={ theme === 'light' ? styleLight.texta1 :styleDark.texta1 }>
       
        My Products
        
      </Text> 
        
        <Text style = {theme === 'light' ?  styleLight.pointer : styleDark.pointer}>
        
        {'>'}
        
        </Text>
    </TouchableOpacity>
    </View>
  );
}

const styleLight = StyleSheet.create({
  floatInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: 150,
    height: 50,
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 30,
    borderRadius: 10,
  },
  pointer: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 3,
    marginLeft: 5,
  },
  texta1: {
    fontSize: 15,
  },
});

const styleDark = StyleSheet.create({
  floatInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: 150,
    height: 50,
    backgroundColor: '#1f1f1f',
    marginTop: 20,
    marginLeft: 30,
    borderRadius: 10,
    
  },
  pointer: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 3,
    marginLeft: 5,
    color : 'white'
  },
  texta1: {
    fontSize: 15,
    color : 'white'
  },
});