import { View } from 'react-native'
import React from 'react'

import { Input, Text } from '@components';
import { useAuthActions } from '@redux';
import { LogoSVG, EyeSVG } from '@assets';
import { WIDTH, HEIGHT, colors, IOS } from '@config';
import { scale } from 'react-native-size-matters';

const EmailPassword = ({ title, narrowMargins }: { title: string, narrowMargins?: boolean }) => {
    const { email, setEmail, password, setPassowrd } = useAuthActions()
    const [securePassword, setSecurePassword] = React.useState(true)

    const pageMargins = () => {
        if (narrowMargins) {
            return [
                IOS ? scale(10) : scale(8),
                IOS ? scale(4) : scale(3),
            ]
        }

        return [
            IOS ? scale(40) : scale(35),
            IOS ? scale(20) : scale(17),
        ]
    }

    return (
        <>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', top: IOS ? 10 : 8 }}>
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
                style={{ marginTop: pageMargins()[0], marginBottom: pageMargins()[1] }}
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
                rightIcon={<EyeSVG />}
                label='Password'
                placeholder='Password'
            />
        </>
    )
}

export default EmailPassword