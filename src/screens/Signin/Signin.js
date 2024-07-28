import { View, Text,Image,SafeAreaView,StyleSheet,useWindowDimensions,ScrollView} from 'react-native'
import React,{useState}  from 'react';
import logo from '../../../assets/images/Logo_1.png';
import CustomeInput from '../../components/CustomeInput';
// import { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import CreateAcc from '../CreateAcc';
import SocialsigninButton from '../../components/SocialsigninButton/SocialsigninButton';


const Signin = () => {
  const [UserName, setUserName] = useState('');
  const [password, setpassword] = useState('');
  const onsigninpress=()=>{
    console.warn("sign in");
  }

  const onforgotpassword=()=>{
    console.warn("forgot password")
  }
 


  const {height}= useWindowDimensions();
  return (

    <ScrollView>
    <View style={styles.root}>
      <Image source={logo} style={[styles.logo,{height:height*0.3}]} resizeMode='contain' />

        <CustomeInput placeholder='UserName' value={UserName} setValue={setUserName} securetextentry={false}/>
        <CustomeInput placeholder='password' value={password} setValue={setpassword} securetextentry={true} />

        <CustomButton onPress={onsigninpress} text={"Sign In"} type="primary"/>
        <CustomButton onPress={onforgotpassword} text={"Forgot password?"} type="tertiary" />
        
        <SocialsigninButton/>
      


        <CustomButton onPress={onforgotpassword} text={"Dont have Account? Sign Up"} type="tertiary" />
        </View>
        
        
    </ScrollView>
  )
}


const styles=StyleSheet.create({
 
  root:{
    alignItems:'center',
    padding:20,
  },


  logo:{

        width:'70%',
        maxWidth:350,
        maxHeight:250,

  },
}

)

export default Signin