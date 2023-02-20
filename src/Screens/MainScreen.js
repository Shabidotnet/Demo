import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Images from '../assets';
import colors from '../colors';
import AppButton from '../Components/AppButton';


const MainScreen = ({ navigation }) => {
    return (
        <ImageBackground style={styles.mainContainer} resizeMode={'cover'} source={Images.bg}>
            <View style={styles.logoView}>
                <Image source={Images.logo} style={styles.logo} />
            </View>
            <Text style={styles.h}>FOR ONLY</Text>
            <Text style={styles.price}>£100</Text>
            <Text style={styles.a}>Annual Fee</Text>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <Text style={styles.aa}>Annual Accounts and tax return made as easy as 1,2,3</Text>
            </View>
            <View style={{ width: '80%', backgroundColor: '#F5F7F9', height: 80, alignSelf: 'center', marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ width: 50, height: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', marginLeft: 20 }}>
                    <Text style={{ alignSelf: 'center',fontSize:35,fontWeight:'700' }}>1</Text>
                </View>
                <Text style={{ width: '70%', marginLeft: 20 }}>You provide us income & expenses informatio</Text>
            </View>
            <View style={{ width: '80%', backgroundColor: '#F5F7F9', height: 80, alignSelf: 'center', marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ width: 50, height: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', marginLeft: 20 }}>
                    <Text style={{ alignSelf: 'center',fontSize:35,fontWeight:'700',color:'#ED1C24' }}>2</Text>
                </View>
                <Text style={{ width: '70%', marginLeft: 20 }}>We prepare return and ask you to check and approve</Text>
            </View>
            <View style={{ width: '80%', backgroundColor: '#F5F7F9', height: 80, alignSelf: 'center', marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ width: 50, height: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', marginLeft: 20 }}>
                    <Text style={{ alignSelf: 'center',color:'#25B6AC',fontSize:35,fontWeight:'700' }}>3</Text>
                </View>
                <Text style={{ width: '70%', marginLeft: 20 }}>You provide us income & expenses information</Text>
            </View>

            <AppButton label={"Sign Up"} onPress={()=>navigation.navigate('Login')}/>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>Exciting clints?</Text>
                    <Text style={{color:'#19B8AC'}}>Login</Text>
                </View>
                <Text style={{color:'#292668'}}>Login as guest</Text>
            </View>

        </ImageBackground>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    mainContainer:{
        width: "100%",
         height: '100%' 
    },
    logoView:{
        width: '100%', marginTop: 50, alignSelf: 'center', alignItems: 'center'
    },
    logo:{
        width: 100, height: 60, resizeMode: 'contain' 
    },
    h:{
        textAlign: 'center', color: colors.lightblack, fontSize: 30,fontWeight:'800'
    },
    price:{
        textAlign: 'center', color: '#697DDB', fontSize: 70,fontWeight:'800'
    },
    a:{
        textAlign: 'center', color: '#3C3C3C', fontSize: 30,fontWeight:'500' 
    },
    aa:{
        textAlign: 'center', color: 'black', fontSize: 16, width: "80%", fontWeight: '500'
    }
})