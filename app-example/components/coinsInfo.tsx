import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector, UseSelector } from 'react-redux'
import { RootState } from '@/redux'

export default function coinsInfo() {

  const coin = useSelector((state: RootState) => state.wallet.coins)
  const theme = useSelector((state: RootState) => state.theme.theme)
  
  return (
    <View style={theme === 'light' ? stylesLight.floatInfo : styleDark.floatInfo}>
      <Text style={ theme === 'light' ?  stylesLight.myCoins : styleDark.myCoins}>{coin}</Text>  
      <Text style={ theme === 'light' ?  stylesLight.infoKoin : styleDark.infoKoin}>My Coins </Text>
    
    </View>
  )
}

const stylesLight = StyleSheet.create({
  floatInfo: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    width: 130,
    height: 100,
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 60,
    borderRadius: 10,
    boxShadow : '0 0 20px rgba(0,0,0,0.2)',
    zIndex : 1,
    padding : 15,
    
    
  },
  myCoins : {
    fontSize : 30,
    color : 'blue',
    fontWeight : 'bold'

  },
  infoKoin : {

  }

})

const styleDark = StyleSheet.create({
  floatInfo: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    width: 130,
    height: 100,
    backgroundColor: '#1f1f1f',
    marginTop: 20,
    marginLeft: 60,
    borderRadius: 10,
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.4)',

    zIndex : 1,
    padding : 15,
 
  },
  myCoins : {
    fontSize : 30,
    color : 'blue',
    fontWeight : 'bold'
    
  },
  infoKoin : {
    color : 'white'
  }

})