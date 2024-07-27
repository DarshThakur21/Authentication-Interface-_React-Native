import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'

const CustomeInput = ({value,setValue,placeholder,securetextentry}) => {
  return (
    <View style={styles.container}>

        <TextInput 
            placeholder={placeholder}
            value={value}
            onChangeText={setValue}
            style={styles.input}
            secureTextEntry={securetextentry}



        />
     
    </View>
  )
}


const styles=StyleSheet.create({
container:{
    backgroundColor:'white',
    width:'100%',
    borderColor:'#e8e8e8',
    borderWidth:1,
    borderRadius:5,
    padding:10,
    marginVertical:7,
},

    input:{
        // borderColor:'red',
        


    },

})

export default CustomeInput