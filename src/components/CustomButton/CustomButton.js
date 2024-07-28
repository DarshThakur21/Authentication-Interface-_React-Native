import { View, Text,StyleSheet,Pressable,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text,type,bgColor,fgColor}) => {
  return (
    // <Pressable onPress={onPress} style={styles.container}>
    //   <Text style={styles.text} >{text}</Text>
    // </Pressable>
    <TouchableOpacity onPress={onPress} 
    style={[styles.container,styles[`cont_${type}`],
            bgColor?{backgroundColor:bgColor}:{},
    ]}>
      <Text style={[styles.text,styles[`text_${type}`],
            fgColor?{color:fgColor}:{},
    ]} >{text}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create(
    {
        container:{
            width:'100%',
            padding:10,
            marginVertical:5,
            alignItems:'center',
            borderRadius:7,
            
        },
        
        cont_primary:{
            backgroundColor:'lightblue',
            
        },
        cont_tertiary:{
            
            // backgroundColor:'gray',

        },
        text:{
                fontWeight:'bold',
                 

        },

        text_primary:{
            color:'black',

        },
        text_tertiary:{
            color:'black',
            fontWeight:'bold',
        },
    }
)

export default CustomButton