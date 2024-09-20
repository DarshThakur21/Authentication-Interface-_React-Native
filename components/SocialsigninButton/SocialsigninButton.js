import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'

const SocialsigninButton = () => {

    const signinmeta = () => {
        console.warn("Meta")
    }
    const singingoogle = () => {
        console.warn("googlers")
    }
    const singingithub = () => {
        console.warn("github")
    }
  return (
    <>
       
       <CustomButton onPress={singingoogle} text={"SignIn with Google"} bgColor='#FAE9EA' fgColor='#DD4D44' />
                <CustomButton onPress={signinmeta} text={"SignIn with Meta"} bgColor='#E7EAF4' fgColor='#4765A9  ' />
                <CustomButton onPress={singingithub} text={"SignIn with Github"} bgColor='#2b3137' fgColor='#CBC3E3' />

    </>
  )
}

export default SocialsigninButton