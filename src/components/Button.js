import React from 'react';
import { Text, TouchableOpacity }  from "react-native"


const Button = ({ onPress, children }) => {
    const { buttonStyle, textButton } = styles
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textButton}> {children} </Text>
        </TouchableOpacity>
    )   
}


const styles ={
    buttonStyle:{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5,
    },
    textButton:{
        alignSelf: 'center',
        color:'#007aff',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    }
}

export default Button