import React from 'react'
import { Linking,View, Text, Image, SafeAreaView, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import react, { useState } from 'react';
import CustomeInput from '../../components/CustomeInput';
// import { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const Forgotpassscreen = () => {
    const [username,setusername]=useState('');
    const [code, setcode] = useState('')

    const navigation=useNavigation();
   
  
    const forgotsend=()=>{
        navigation.navigate('NewPassword');


    }
  
    const onsigninpress=()=>{
        navigation.navigate('Signin');

    }



    const { height } = useWindowDimensions();
    return (

        <ScrollView>



            <View style={styles.root}>
               
                <Text style={styles.title}> Reset Password </Text>

               
               
                <CustomeInput placeholder='Enter username' value={username} setValue={setusername} securetextentry={false} /> 
                

                
       
                <CustomButton onPress={forgotsend} text={"send"} type="primary" />
                <CustomButton onPress={onsigninpress} text={"back to sign in"} type="tertiary" />

  
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    

    root: {
        alignItems: 'center',
        padding: 20,
        marginTop:20,
    },
    confirm:{
        fontSize:12,
        color:'gray',
    },  
    terms:{
        color:'orange',
        textDecorationLine:'underline',
    },


    logo: {

        width: '70%',
        maxWidth: 350,
        maxHeight: 250,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
}

)

export default Forgotpassscreen