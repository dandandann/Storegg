import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux'
import { toggleTheme } from '@/redux/theme'


export default function ThemeToggle() {
    const dispatch = useDispatch()
    const theme = useSelector((state: RootState) => state.theme.theme)
 
 
 
 
 
    return(
        <TouchableOpacity style={styles.flyingToggle} onPress={() => dispatch(toggleTheme())} >
            {theme === 'light' ? 
            
            <Image source={require('@/assets/images/lightTheme.jpg')} style = {{width : 50, height : 50}} />
            
            : 
            
            <Image source={require('@/assets/images/darkTheme.jpg')} style = {{width : 50, height : 50}} />
            
            
            }


        </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
    flyingToggle : {
        width : 50,

        height : 50,
        left : 250,
        bottom: 40,
        borderColor : 'black',
        borderRadius : 50,
        resizeMode : 'contain',
    }
});