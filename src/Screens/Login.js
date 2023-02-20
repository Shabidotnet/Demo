import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import Images from '../assets'
import AppButton from '../Components/AppButton'
import EditText from '../Components/TextInPut'
EditText
const MainScreen = ({ navigation }) => {
    return (
        <ScrollView style={{flex:1}}>
        <ImageBackground style={{ flex: 1 }} resizeMode={'cover'} source={Images.bg}>
            <View style={{ width: '100%', marginTop: 50, alignSelf: 'center', alignItems: 'center' }}>
                <Image source={Images.logo} style={{ width: 90, height: 55, resizeMode: 'contain' }} />
            </View>
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 28, fontWeight: '700' }}>Sign Up</Text>
            </View>
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                <Text style={{ fontSize: 14 }}>Enter your credentials to continue.</Text>
            </View>

            <EditText label={'First Name'} icons={Images.user} />
            <EditText label={'Last Name'} icons={Images.user} />
            <EditText label={'Email Address'} icons={Images.mail} />
            <EditText label={'Phone Number'} icons={Images.call} />
            <EditText label={'Create a Password'} icons={Images.lock} />


            <AppButton label={"Create Account"} onPress={() => navigation.navigate('Home')} />

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '80%', alignSelf: 'center', marginTop: 20 }}>
                <View style={{ borderWidth: 1, width: 50, borderColor: 'gray' }} />
                <Text>SignUp With</Text>
                <View style={{ borderWidth: 1, width: 50, borderColor: 'gray' }} />
            </View>
            <View style={{ flexDirection: 'row', width: '80%', alignSelf: 'center', justifyContent: 'space-between' }}>
                <View style={{ width: 140, backgroundColor: '#F5F7F9', height: 60, alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 40, height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', marginLeft: 20 }}>
                        <Image source={Images.fb} style={{ width: 24, height: 24 }} />
                    </View>
                    <Text style={{ marginLeft: 10, fontSize: 10, width: 90 }}>Login with Facebook</Text>
                </View>
                <View style={{ width: 140, backgroundColor: '#F5F7F9', height: 60, alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 40, height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', marginLeft: 20 }}>
                        <Image source={Images.google} style={{ width: 24, height: 24 }} />
                    </View>
                    <Text style={{ marginLeft: 10, fontSize: 10, width: 70 }}>Login with Google</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>Exciting clints?</Text>
                    <Text style={{ color: '#19B8AC' }}>Login</Text>
                </View>
                <Text style={{ color: '#292668' }}>Login as guest</Text>
            </View>
        </ImageBackground>
        </ScrollView>
    )
}

export default MainScreen

const styles = StyleSheet.create({

    wrapperInput: {
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#DCDCDC',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%', alignSelf: 'center'
    },
    icon: {
        width: 24,
        height: 24,
    },
    input: {
        padding: 10,
        width: '100%',
    },
})