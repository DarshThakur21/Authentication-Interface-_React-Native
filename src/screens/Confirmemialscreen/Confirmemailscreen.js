import React from 'react'
import { Linking,View, Text, Image, SafeAreaView, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import react, { useState } from 'react';
import CustomeInput from '../../components/CustomeInput';
// import { useState } from 'react';
import CustomButton from '../../components/CustomButton';

const Confirmemailscreen = () => {
    const [code, setcode] = useState('')
   
    const confirmcode=()=>{

    }
    const resendcode=()=>{

    }
    const onsigninpress=()=>{

    }



    const { height } = useWindowDimensions();
    return (

        <ScrollView>



            <View style={styles.root}>
                {/* <Image source={logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode='contain' /> */}
                <Text style={styles.title}> Confirm  Resgisteration </Text>

               
                <CustomeInput placeholder='Enter the code' value={code} setValue={setcode} securetextentry={false} /> 
                

                <CustomButton onPress={confirmcode} text={"Confirm"} type="primary" />

                {/* <View style={{flexDirection: 'row'}}>

                <CustomButton onPress={resendcode} text={"Resend Code"} type="secondary" />
                <CustomButton onPress={onsigninpress} text={"Back to Sign In"} type="tertiary" />
                </View> */}
                 <View style={styles.container}>
            <View style={styles.button}>
                <CustomButton onPress={resendcode} text={"Resend Code"} type="secondary" />
            </View>
            <View style={styles.button}>
                <CustomButton onPress={onsigninpress} text={"Back to Sign In"} type="tertiary" />
            </View>
        </View>
              


                {/* <SocialsigninButton/> */}

        {/* <CustomButton onPress={onsigninpress} text={"already have an account"} type="tertiary" /> */}




                

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Distribute space between buttons
        padding: 10, // Optional, for spacing around buttons
    },
    button: {
        flex: 1, // Make buttons take up equal space
        marginHorizontal: 5, // Optional, for spacing between buttons
    },

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

export default Confirmemailscreen