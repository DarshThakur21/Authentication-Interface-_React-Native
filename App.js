import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView,Image,View } from 'react-native';
import Signin from './src/screens/Signin';
// import logo from '..assets1'

export default function App() {
  return (
    <View style={{backgroundColor:'#F9FBFC',flex:1}} >
      {/* <Text>Open up App.js to start working on your app</Text> */}
      {/* <Text>Open up App.js to start working on your app</Text> */}
      <Signin/>
       
    </View>
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
