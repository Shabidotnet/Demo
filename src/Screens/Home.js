import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import React from 'react'
import Images from '../assets'
import AppButton from '../Components/AppButton'

const Home = () => {
  return (
    <SafeAreaView style={{height:'100%'}}>
      <Text style={{alignSelf:'center',color:'black',marginTop:20,fontSize:16,fontWeight:'500'}}>You're almost there!</Text>
        <Image source={Images.done} style={{marginTop:200,alignSelf:'center',width:90,height:90}}/>
        <Text style={{fontWeight:'700',fontSize:20,alignSelf:'center',marginTop:20}}>Signup Successfully!</Text>
        <Text style={{fontWeight:'700',fontSize:12,alignSelf:'center',marginTop:20,width:'70%',textAlign:'center',color:'#808080',marginBottom:180}}>Congratulation! Your account has been verified successfully</Text>
        <AppButton label={"Lets Explore"} />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})