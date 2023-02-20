import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Images from '../assets'
const EditText = (props) => {
    const {
        label,
        icons
    } = props

    return (
        <View style={styles.wrapperInput}>
            <View
                style={styles.wrapperIcon}
            >
                <Image source={icons} style={styles.icon} />
            </View>
            <TextInput
                style={styles.input}
                placeholder={label}
            />
        </View>
    )
}

export default EditText

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