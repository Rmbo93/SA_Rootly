import { View, Text, Platform} from 'react-native'
import React from 'react'
import tw from "twrnc"
import { SafeAreaView } from 'react-native-safe-area-context'
interface Props{
    children:React.ReactNode,
    className?:string
}
export const Container=({children,className}:Props) =>{
  return (
    <SafeAreaView style={tw`bg-white flex1 ${Platform.OS==="android" ? "mt-10" : "mt=0"}`}>
    <View  style = {[tw `b-5`,className ? tw`${className}`: null]}> {children}
    </View>
    </SafeAreaView>
  )
} 