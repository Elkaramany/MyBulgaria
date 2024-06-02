import React from 'react';
import { ImageBackground, ImageSourcePropType} from 'react-native';

interface Props {
    children: React.ReactNode;
    imageSource: ImageSourcePropType;
}

const Background: React.FC<Props> = ({ children, imageSource }) => {
    return (
        <ImageBackground source={imageSource} style={{ flex: 1 }}>
            {children}
        </ImageBackground>
    );
};

export default Background;
