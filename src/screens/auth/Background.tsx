import React from 'react';
import { ImageBackground } from 'react-native';

import { homeBg } from '@assets';

interface Props {
    children: React.ReactNode
}

const Background: React.FC<Props> = ({ children }) => {


    return (
        <ImageBackground source={homeBg} style={{ flex: 1, paddingHorizontal: '3.5%' }}>
            {children}
        </ImageBackground>
    )
}

export default Background
