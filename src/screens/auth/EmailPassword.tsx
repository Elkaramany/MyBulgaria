import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Input, Text } from '@components';
import { useAuthActions } from '@redux';
import { LogoSVG, EyeSVG, EyeUnlockSVG } from '@assets';
import { WIDTH, HEIGHT, colors, IOS } from '@config';
import { scale } from 'react-native-size-matters';

const EmailPassword = ({ title, narrowMargins, userName }: { title: string, narrowMargins?: boolean, userName: boolean }) => {
    const { email, setEmail, password, setPassowrd, name, setName, setId } = useAuthActions();
    const [securePassword, setSecurePassword] = React.useState(true);

    const pageMargins = () => {
        if (narrowMargins) {
            return [
                IOS ? scale(10) : scale(8),
                IOS ? scale(4) : scale(3),
            ];
        }

        return [
            IOS ? scale(40) : scale(35),
            IOS ? scale(20) : scale(17),
        ];
    };

    return (
        <>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', top: IOS ? 13 : 10 }}>
                <LogoSVG width={WIDTH * 0.23} height={HEIGHT * 0.15} />
                <TouchableOpacity onPress={() => setId(0)}>
                    <Text
                        value='Skip'
                        button
                        bold
                        color={colors.text.secondary}
                    />
                </TouchableOpacity>

            </View>
            <Text value={title} h1 lightBold color={colors.text.secondary} style={{ marginTop: pageMargins()[0], marginBottom: pageMargins()[1] }} />
            <Input
                value={email}
                onChangeText={setEmail}
                label='Email'
                placeholder='Email address'
                labelStyle={styles.customLabel}
                secureTextEntry={false}
            />
            <Input
                value={password}
                onChangeText={setPassowrd}
                onRightIconPress={() => setSecurePassword(!securePassword)}
                rightIcon={securePassword ? <EyeSVG /> : <EyeUnlockSVG />}
                secureTextEntry={securePassword}
                label='Password'
                placeholder='Password'
                labelStyle={styles.customLabel}
            />
            {userName &&
                <Input
                    value={name}
                    onChangeText={setName}
                    label='Username'
                    placeholder='Your name'
                    labelStyle={styles.customLabel}
                />
            }
        </>
    );
};

const styles = StyleSheet.create({
    customLabel: {
        marginTop: IOS ? 12 : 10,
        marginBottom: IOS ? 9 : 6.5,
    }
})


export default EmailPassword;
