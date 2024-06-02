import React from 'react';
import { ImageBackground, ImageSourcePropType, TouchableWithoutFeedback, Keyboard } from 'react-native';

interface Props {
    children: React.ReactNode;
    imageSource: ImageSourcePropType;
}

const Background: React.FC<Props> = ({ children, imageSource }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <ImageBackground source={imageSource} style={{ flex: 1 }}>
                {children}
            </ImageBackground>
        </TouchableWithoutFeedback>
    );
};

export default Background;
