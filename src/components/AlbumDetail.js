import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headertTextStyle, imageStyle } = styles
    return(
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }}></Image>
                </View>
                <View style={headerContentStyle}>
                    <Text style={headertTextStyle}> {title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{ uri: image }}/>
            </CardSection>
            <CardSection>
                <Button text={'Buy now!'} onPress={() => Linking.openURL(url)}>
                    Buy now!
                </Button>
            </CardSection>
        </Card>
    )
}


const styles = {

    headerContentStyle:{
        flexDirection: 'column',
        justifyContent: 'space-around',
    },

    imageStyle:{
        height:300,
        flex: 1,
        width:null
    },

    headertTextStyle:{
        fontSize: 18,
    },

    thumbnailContainerStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },

    thumbnailStyle:{
        height: 50,
        width:50
    }

}

export default AlbumDetail