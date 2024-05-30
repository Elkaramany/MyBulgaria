import { View } from 'react-native'
import React from 'react'

import { Input, Text } from '@components';
import { useAuthActions } from '@redux';
import { LogoSVG, EyeSVG } from '@assets';
import { WIDTH, HEIGHT, colors, IOS } from '@config';
import { scale } from 'react-native-size-matters';

const EmailPassword = ({ title }: { title: string }) => {
    const { email, setEmail, password, setPassowrd } = useAuthActions()
    const [securePassword, setSecurePassword] = React.useState(true)

    return (
        <View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <LogoSVG width={WIDTH * 0.23} height={HEIGHT * 0.15} />

                <Text
                    value='Skip'
                    button bold
                    color={colors.text.secondary}
                />
            </View>
            <Text
                value={title}
                h1 lightBold
                color={colors.text.secondary}
                style={{ marginTop: IOS ? scale(40) : scale(35), marginBottom: IOS ? scale(20) : scale(17) }}
            />

            <Input
                value={email}
                onChangeText={setEmail}
                label='Email'
                placeholder='Email address'
            />

            <Input
                value={password}
                onChangeText={setPassowrd}
                secureTextEntry={securePassword}
                onRightIconPress={() => setSecurePassword(!securePassword)}
                rightIcon={EyeSVG}
                label='Password'
                placeholder='Password'
            />
        </View>
    )
}

export default EmailPassword