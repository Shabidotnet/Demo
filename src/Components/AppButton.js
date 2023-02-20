import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const AppButton = (props) => {
    const { label, onPress } = props
    return (
        <TouchableOpacity onPress={onPress}
        >
            <LinearGradient style={styles.mainContainer} colors={['#6E69CD', '#19B8AC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>

                <Text style={{ color: 'white' }}>{label}</Text>
            </LinearGradient>
        </TouchableOpacity>

    )
}
export default AppButton

const styles = StyleSheet.create({
    mainContainer: {
        width: "80%",
        height: 54,
        alignSelf: 'center',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
