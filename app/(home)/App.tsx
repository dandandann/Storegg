import { Alert, BackHandler, StyleSheet, Text, View, Modal, Button, TouchableOpacity } from "react-native"
import MyProductsButton from "@/app-example/components/myProductsButton"
import FloatingMinigame from "@/app-example/components/floatingMinigame"
import ProductList from "@/app-example/components/ProductList"
import SearchBar from "@/app-example/components/searchBar"
import { Link, useFocusEffect } from "expo-router"
import CoinsInfo from "@/app-example/components/coinsInfo"
import React, { useEffect, useState } from "react"
import Theme from "@/app-example/components/themeToggle"
import { useSelector } from "react-redux"
import { RootState } from "@/redux"

console.log("App "); 


export default function App() {
  const theme = useSelector((state : RootState) => state.theme.theme)
  const [modalVis, setModal] = useState(false)

  
console.log(theme);


  useFocusEffect(
    React.useCallback(() => {
      const leaveApp = () => {
        setModal(true)
        return true
      };

      const backPress = BackHandler.addEventListener('hardwareBackPress', leaveApp)

      return () => backPress.remove()
    }, [])
  );

  const confirmNo = () => {
    setModal(false)
  }

  const confirmYes = () => { 
    setModal(false);
    BackHandler.exitApp()
  }
  

  return (
    <View style={styleLight.superMain}>
        
        
        <Modal transparent={true} visible={modalVis} onRequestClose={confirmNo}>
            <View style={styleModal.modalContainer}>
              <View style={styleModal.reallyModal}>
                <Text style={styleModal.modalText}>Are you sure you want to leave Storegg?</Text>
                <View style={styleModal.centerButton}>
                  <TouchableOpacity style={styleModal.confirmButtons} onPress={confirmYes}>
                  <Text style={styleModal.buttonText}>Yes</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styleModal.confirmButtons} onPress={confirmNo}>
                    <Text style={styleModal.buttonText} >No</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        </Modal>



      <View style={styleLight.search123}>
          <SearchBar />  
      </View>
          
      <View style={styleLight.main}>
            <View style = {styleLight.containerInfos}>
              <MyProductsButton /> 
              <CoinsInfo />
            </View>
              
            <View style={theme === 'light' ? styleLight.container : styleDark.container}>
              <Text style={theme === 'light' ? styleLight.textInfo : styleDark.textInfo}>Available Prdouct </Text>
                 <Theme />

                <ProductList />
              
              
               
            </View>
                
            <FloatingMinigame />  
      </View>

    </View>




  );
}

const styleModal = StyleSheet.create({
  modalContainer :{
    width : '100%',
    height : '100%',
    backgroundColor : 'rgba(0,0,0,0.5)',
    alignItems : 'center',
    justifyContent : 'center',
    display : 'flex',
  },
  reallyModal : {
    width : 300,
    height : 170,
    padding : 20,
    backgroundColor : 'white',

  },
  centerButton : {
    width : '100%',
    height : 40,
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-between',
    marginTop : 20,
    top : 20,
    
  },
  confirmButtons : {
    backgroundColor : 'rgba(0,0,0,0.5)',
    width : 100,
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
  },
  modalText :{
    fontSize : 20,
    fontWeight : 'bold',
    textAlign : 'center',
  },
  buttonText : {
    textAlign : 'center',
  }
})

const styleLight = StyleSheet.create({
  superMain : {
    width : '100%',
    height : '100%',
  },
  main : {
    backgroundColor: '#8775A9',
    width : '100%',
    height : '100%',
    alignItems : 'center',
    display : 'flex',
    
  },
  container : {
    backgroundColor: 'white',
    width : '100%',
    height : '100%',
    borderTopLeftRadius : 40,
    borderTopRightRadius : 40,

    marginTop : 30,

  },
  textInfo : {
    fontSize : 25,
    marginLeft : 20,
    marginTop : 30,
    fontWeight : 'bold'
  },

  search123 : {
    backgroundColor: '#8775A9',
    width : '100%',
    height : '10%',
    alignItems : 'center',
    display : 'flex',
  },
  containerInfos : {
    width : '100%',
    height : '10%',
    flexDirection : 'row',

    
  }
})

const styleDark = StyleSheet.create({

  container : {
    backgroundColor: '#1F1F1F',
    width : '100%',
    height : '100%',
    borderTopLeftRadius : 40,
    borderTopRightRadius : 40,
    color : 'white',
    marginTop : 30,
    fontWeight : 'bold',

  },
  textInfo : {
    fontSize : 25,
    marginLeft : 20,
    marginTop : 30,
    fontWeight : 'bold',
    color : 'white'
  },

  
})