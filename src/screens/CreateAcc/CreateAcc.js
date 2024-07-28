import React from 'react'
import { Linking,View, Text, Image, SafeAreaView, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import react, { useState } from 'react';
import CustomeInput from '../../components/CustomeInput';
// import { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import SocialsigninButton from '../../components/SocialsigninButton/SocialsigninButton';
// import Signin from '../Signin';

const CreateAcc = () => {
    const [UserName, setUserName] = useState('');
    const [password, setpassword] = useState('');
    const [email, setemail] = useState('');
    const [confirmpass, setconfirmpass] = useState('');
    

    const onpresspolicy=()=>{
        
        console.warn("Meta")
    }
    const onpresstclink=()=>{
        const url = 'https://www.google.com'; // Replace with your desired URL
    Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
        console.warn("Meta")

    }
        const onregisterpress = () => {

    }

    const onsigninpress=()=>{
        
    }



    const { height } = useWindowDimensions();
    return (

        <ScrollView>



            <View style={styles.root}>
                {/* <Image source={logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode='contain' /> */}
                <Text style={styles.title}> Create Account</Text>

                <CustomeInput placeholder='UserName' value={UserName} setValue={setUserName} securetextentry={false} />
                <CustomeInput placeholder='Email' value={email} setValue={setemail} securetextentry={false} />
                <CustomeInput placeholder='password' value={password} setValue={setpassword} securetextentry={true} />
                <CustomeInput placeholder='Confirm Password' value={confirmpass} setValue={setconfirmpass} securetextentry={true} />

                <CustomButton onPress={onregisterpress} text={"Register"} type="primary" />
                <Text style={styles.confirm}>By Registerig your account you are confirm   <Text style={styles.terms} onPress={onpresstclink}>terms, condition</Text> and <Text style={styles.terms} onPress={onpresspolicy}>policies.</Text> </Text>


                <SocialsigninButton/>

        <CustomButton onPress={onsigninpress} text={"already have an account"} type="tertiary" />




                

            </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({

    root: {
        alignItems: 'center',
        padding: 20,
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


export default CreateAcc