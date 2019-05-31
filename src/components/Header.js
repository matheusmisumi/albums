import React from 'react';

import { Text, View } from 'react-native';


export default Header = (props) => {

    const { textStyle, viewStyle } = styles;
    const { title } = props;
    return (
    <View style={viewStyle} >
        <Text style={textStyle}> {title} </Text>
    </View>
    ) 
}

const styles = {
    viewStyle:{
        backgroundColor: '#CECECE',
        justifyContent: 'center',
        alignItems: 'center',
        height: 85,
        paddingTop: 30,
        shadowColor: 'black',
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
    }
}