import { View, Text,Image,SafeAreaView,StyleSheet,useWindowDimensions,} from 'react-native'
import React  from 'react';
import logo from '../../../assets/images/Logo_1.png';
import CustomeInput from '../../components/CustomeInput';
import { useState } from 'react';

const Signin = () => {
  const [UserName, setUserName] = useState('');
  const [password, setpassword] = useState('');



  const {height}= useWindowDimensions();
  return (
    <View style={styles.root}>
      <Image source={logo} style={[styles.logo,{height:height*0.3}]} resizeMode='contain' />

        <CustomeInput placeholder='UserName' value={UserName} setValue={setUserName} securetextentry={false}/>
        <CustomeInput placeholder='password' value={password} setValue={setpassword} securetextentry={true} />
         
    </View>
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