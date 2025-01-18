import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux'

export default function floatingMinigame() {
    const navigate = useNavigation()
    const theme = useSelector((state: RootState) => state.theme.theme)

    const pressButton = () => {
        navigate.navigate('Minigame')
    }

 
    return (
    <View style={stylesLight.abs}>
        <TouchableOpacity style={theme === 'light' ?  stylesLight.actionb : styleDark.actionb } onPress={pressButton}>
            <Image source={require('@/assets/images/egg-full.png')}style = { stylesLight.image} />
        </TouchableOpacity>
    </View>
    )
}


const stylesLight = StyleSheet.create({

    actionb : {
        position : 'absolute',
        left : 100,
        top : 600,
        backgroundColor : 'white',
        width : 70,
        height : 70,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 50,
        boxShadow : '0 0 10px rgba(0,0,0,0.2)',

    }, 
    image : {
        width : 40,
        height : 40
    },
    abs : {
        position : 'absolute',

    }
})

const styleDark = StyleSheet.create({

    actionb : {
        position : 'absolute',
        left : 100,
        top : 600,
        backgroundColor : '#1F1F1F',
        width : 70,
        height : 70,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 50,
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.4)',

    }, 
    image : {
        width : 40,
        height : 40
    },
    abs : {
        position : 'absolute',

    }
})