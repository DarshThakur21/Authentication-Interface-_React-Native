import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView,Image,View } from 'react-native';


import Signin from './src/screens/Signin';
// import logo from '..assets1'
 import CreateAcc from './src/screens/CreateAcc';
 import Confirmemailscreen from './src/screens/Confirmemialscreen/Confirmemailscreen';
 import Forgotpassscreen from './src/screens/Forgotpassscreen/Forgotpassscreen';
 import Confirmpassscreen from './src/screens/Confirmpassscreen/Confirmpassscreen';
  import Navigation from './src/navigation'; 




export default function App() {
  return (
   
    <SafeAreaView style={{backgroundColor:'#F9FBFC',flex:1}} >
    
      {/*  */}
       {/* <CreateAcc/> */}
       {/* <Confirmemailscreen/> */}
       {/* <Forgotpassscreen/> */}
       {/* <Confirmpassscreen /> */}
       <Navigation/>


       
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
