import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from 'expo-router'
import { addCoin } from '@/redux/wallet'
import { RootState } from '@/redux'
 
export default function Minigame() {
  const [countClick, setCount] = useState(0)
  const [prize, getPrize] = useState(0)
  const theme = useSelector((state: RootState) => state.theme.theme)

  const dispatch = useDispatch()


  const eggImg = () => {
    if(countClick === 4){
      return require('@/assets/images/egg-broken.png')
    }else{
      return require('@/assets/images/egg-full.png')
    }
  }
  console.log('theme', theme)
   const animationEgg = () => {

    if(countClick === 0){
      return require('@/assets/images/egg-full.png')  

    }else if(countClick === 1){
      return styleLight.eggRotateRight


    }else if(countClick === 2){
      return styleLight.eggDefault  


    }else if(countClick === 3){
      return styleLight.eggRotateLeft  

    }else{
      return require('@/assets/images/egg-broken.png')  
    } 
  }
  

  const navigate = useNavigation()


  const pressButton = () => {
      navigate.navigate('App')
  }



  const pressed = () => {
    if(countClick < 4){
      setCount(countClick + 1)
      if(countClick === 3){
        const randomP = Math.floor(Math.random() * 3) + 1
        getPrize(randomP)
        console.log('dudududud' , randomP)
        
        if(randomP === 1){
          console.log("getcoin")
          dispatch(addCoin(100))
        }else if(randomP === 2){
          console.log("getcoin")
          dispatch(addCoin(50))
        }else if(randomP === 3){
          console.log("getcoin")
          dispatch(addCoin(20)) 
        }



      }
    }

  }

  const prizeimg = () => {
   
    if(prize === 1){
      return <View>
          <Text style={theme === 'light' ? styleLight.prizeCongrat : styleDark.prizeCongrat}>Congratulations !</Text>
          <Text style={theme === 'light' ? styleLight.prizeCongrat2 : styleDark.prizeCongrat2}>You got a gold coin !</Text>
          <Image source={require('@/assets/images/gold-coin.png')} style={theme === 'light' ? styleLight.prizeImage : styleDark.prizeImage} />
      
          <Text style={theme === 'light' ? styleLight.prizeCongrat3 : styleDark.prizeCongrat3}>100 Coins have been added to your balance</Text>
      </View> 
     
    }else if(prize === 2){
      return <View>
      <Text style={theme === 'light' ? styleLight.prizeCongrat : styleDark.prizeCongrat}>Congratulations !</Text>
      <Text style={theme === 'light' ? styleLight.prizeCongrat2 : styleDark.prizeCongrat2}>You got a silver coin !</Text>
      <Image source={require('@/assets/images/silver-coin.png')} style={theme === 'light' ? styleLight.prizeImage : styleDark.prizeImage} />
  
      <Text style={theme === 'light' ? styleLight.prizeCongrat3 : styleDark.prizeCongrat3}>50 Coins have been added to your balance</Text>
  </View> 
    }else if(prize === 3){
      return <View>
      <Text style={theme === 'light' ? styleLight.prizeCongrat : styleDark.prizeCongrat}>Congratulations !</Text>
      <Text style={theme === 'light' ? styleLight.prizeCongrat2 : styleDark.prizeCongrat2}>You got a bronze coin !</Text>
      <Image source={require('@/assets/images/bronze-coin.png')} style={theme === 'light' ? styleLight.prizeImage : styleDark.prizeImage} />  
      <Text style={theme === 'light' ? styleLight.prizeCongrat3 : styleDark.prizeCongrat3}>20 Coins have been added to your balance</Text>
  </View> 
      
    }else{
      return null
    }
  }
  return (
    <View style={theme === 'light' ? styleLight.main : styleDark.main}>

      <View style={theme === 'light' ? styleLight.header : styleDark.header}>
        <Text style={theme === 'light' ? styleLight.backButton : styleDark.backButton} onPress={pressButton}>{'<'} </Text> 
        <Text style={theme === 'light' ? styleLight.headerText : styleDark.backButton}>Minigame</Text>
      </View>
      
      
      
      
      <View style={theme === 'light' ? styleLight.prizes : styleDark.prizes}>
        <Image source={require('@/assets/images/gold-coin.png')} style={theme === 'light' ? styleLight.image : styleDark.image} /><Text style={{ color: theme === 'light' ? 'black' : 'white' }}>100</Text>
        <Image source={require('@/assets/images/silver-coin.png')} style={theme === 'light' ? styleLight.image : styleDark.image} /><Text style={{ color: theme === 'light' ? 'black' : 'white' }}>50</Text>
        <Image source={require('@/assets/images/bronze-coin.png')} style={theme === 'light' ? styleLight.image : styleDark.image} /><Text style={{ color: theme === 'light' ? 'black' : 'white' }}>20</Text>
      </View>


      <View style={ theme === 'light' ? styleLight.eggContainer : styleDark.eggContainer}>
        <TouchableOpacity onPress={pressed} disabled={countClick === 4} >
          {countClick === 0 && (
             <View style={ theme === 'light' ? styleLight.textContainer : styleDark.textContainer}>
              <Text style={theme === 'light' ? styleLight.eggInfo : styleDark.eggInfo}>Click on the egg to get your prize !</Text>
             </View>

          )}
          
          {countClick === 4 && prizeimg()}
          
          <Image source={eggImg()} style={[theme === 'light' ? styleLight.eggDefault : styleDark.eggDefault, animationEgg()]} />

        </TouchableOpacity>
        

      </View>
    
    
    </View>
  )
}


const styleLight = StyleSheet.create({
  main : {
    width : '100%',
    height : '100%',
    
  },
  header : {
    width : '100%',
    height : '10%',
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'row',
  },
  prizes : {
    width : '100%',
    height : '10%',
    alignItems : 'center',
    flexDirection : 'row',
  },
  image : {
    width : 50,
    height : 50,
    marginLeft: 40
  },
  eggDefault : {
    width : 200,
    height : 200,
    resizeMode : 'contain',
    marginLeft : 100,
  },
  eggRotateRight : {
    width : 200,
    height : 200,
    resizeMode : 'contain',
    marginLeft : 100,
    transform : [{rotate : '20deg'}],
    marginTop : 70,
  },
  eggRotateLeft : {
    width : 200,
    height : 200,
    marginLeft : 100,
    resizeMode : 'contain',
    transform : [{rotate : '-20deg'}],
    marginTop : 70,

  },
  eggContainer : {
    width : '100%',
    height : '70%',
    justifyContent : 'center',

    flexDirection : 'column',
  },
  backButton : {
    fontSize : 50,
    marginRight : 20,
    fontWeight : 'bold',
  },
  headerText : {
    fontSize : 40,
    marginRight : 100,
    fontWeight : 'bold',
  },
  textContainer : {
    width : '80%',
    height : 100,
    display : 'flex',
    textAlign : 'center',
    justifyContent : 'center',
    alignItems : 'center',
    marginLeft : 45,
    
  },
  eggInfo : {
    fontSize : 30,
    textAlign : 'center',
  },
  prizeImage : {
    width : 60,
    height : 60,
    marginLeft : 170,
  },
  prizeCongrat : {
    fontSize : 30,
    fontWeight : 'bold',
    textAlign : 'center',
  },
  prizeCongrat2 : {
    fontSize : 20,
    textAlign : 'center',
    marginBottom : 40,
  },

  prizeCongrat3 : {
    fontSize : 17,
    textAlign : 'center',
    fontWeight : 'bold',
    top : 300,
  }

})




const styleDark = StyleSheet.create({
  main : {
    width : '100%',
    height : '100%',
    backgroundColor : '#1f1f1f',
  },
  header : {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 16,
  },
  prizes : {
    width : '100%',
    height : '10%',
    alignItems : 'center',
    flexDirection : 'row',
  },
  image : {
    width : 50,
    height : 50,
    marginLeft: 40
  },
  eggDefault : {
    width : 200,
    height : 200,
    resizeMode : 'contain',
    marginLeft : 100,
  },
  eggRotateRight : {
    width : 200,
    height : 200,
    resizeMode : 'contain',
    marginLeft : 100,
    transform : [{rotate : '20deg'}],
    marginTop : 70,
  },
  eggRotateLeft : {
    width : 200,
    height : 200,
    marginLeft : 100,
    resizeMode : 'contain',
    transform : [{rotate : '-20deg'}],
    marginTop : 70,

  },
  eggContainer : {
    width : '100%',
    height : '70%',
    justifyContent : 'center',

    flexDirection : 'column',
  },
  backButton : {
    fontSize : 40,
    marginLeft : 30,
    fontWeight : 'bold',
    color : 'white'
    
  },
  headerText : {
    fontSize : 40,
    marginRight : 100,
    fontWeight : 'bold',
    color : 'white'
  },
  textContainer : {
    width : '80%',
    height : 100,
    display : 'flex',
    textAlign : 'center',
    justifyContent : 'center',
    alignItems : 'center',
    marginLeft : 45,
    
  },
  eggInfo : {
    fontSize : 30,
    textAlign : 'center',
    color : 'white'
  },
  prizeImage : {
    width : 60,
    height : 60,
    marginLeft : 170,
  },
  prizeCongrat : {
    fontSize : 30,
    fontWeight : 'bold',
    textAlign : 'center',
    color : 'white'
  },
  prizeCongrat2 : {
    fontSize : 20,
    textAlign : 'center',
    marginBottom : 40,
    color : 'white',
  },

  prizeCongrat3 : {
    fontSize : 17,
    textAlign : 'center',
    fontWeight : 'bold',
    top : 300,
    color : 'white',
  }

})