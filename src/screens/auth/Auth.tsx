import React from 'react';

import { Seperator, Container } from '@components';
import { authBG } from '@assets'
import SocialMediaAuth from './SocialMediaAuth';
import Background from './Background';

interface Props {
    children: React.ReactNode
}

const Auth: React.FC<Props> = ({ children }) => {

    return (
        <Background imageSource={authBG}>
            <Container parentContainerStyle={{ backgroundColor: 'transparent' }}>
                {children}
                <Seperator />
                <SocialMediaAuth />
            </Container>
        </Background>
    )
}

export default Auth
