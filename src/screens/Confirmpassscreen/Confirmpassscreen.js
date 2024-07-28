
//this is the code for confirming the reset password
import React from 'react'
import { Linking,View, Text, Image, SafeAreaView, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import react, { useState } from 'react';
import CustomeInput from '../../components/CustomeInput';
// import { useState } from 'react';
import CustomButton from '../../components/CustomButton';

const Confirmpassscreen = () => {
    const [newpassowrd, setnewpassword] = useState('');
    const [code, setcode] = useState('')
   
  
    const onsubmitpass=()=>{

    }
  
    const onsigninpress=()=>{

    }



    const { height } = useWindowDimensions();
    return (

        <ScrollView>



            <View style={styles.root}>
               
                <Text style={styles.title}> Reset your Password </Text>

               
               
                <CustomeInput placeholder='Confirmation Code' value={code} setValue={setcode} securetextentry={false} /> 
                <CustomeInput placeholder='Enter Password' value={newpassowrd} setValue={setnewpassword} securetextentry={true} /> 
                

                
       
                <CustomButton onPress={onsubmitpass} text={"Submit"} type="primary" />
                <CustomButton onPress={onsigninpress} text={"Back to sign in"} type="tertiary" />

  
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

export default Confirmpassscreen;