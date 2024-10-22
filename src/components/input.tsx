import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TextInputProps, ViewStyle, TouchableOpacity } from 'react-native';
import { colors, fontSizes, fontWeights, globalStyles, IOS, WIDTH } from '@config';
import { TextStyle, scale } from 'react-native-size-matters';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Text from './text'

interface Props extends TextInputProps {
    label?: string;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    placeholder?: string
    hint?: string
    buttonStyle?: ViewStyle
    onRightIconPress?: () => void
    onLeftIconPress?: () => void
    labelStyle?: TextStyle | ViewStyle | any
}



const Input: React.FC<Props> = ({
    label, placeholder, value, onChangeText, secureTextEntry, onSubmitEditing, rightIcon, leftIcon, hint, buttonStyle, onRightIconPress, onLeftIconPress, labelStyle = {}, ...rest
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <>
            {label &&
                <Text
                    value={label}
                    bold
                    button
                    style={[styles.labelStyle, labelStyle]}
                />
            }
            <View style={globalStyles.rowBetween}>
                <TouchableWithoutFeedback
                    style={[{
                        backgroundColor: colors.bg.primary,
                        borderColor: colors.bg.tertiary,
                        borderWidth: 2,
                        borderRadius: 15,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }, buttonStyle]}
                >
                    {
                        leftIcon &&
                        <TouchableOpacity
                            onPress={() => onLeftIconPress()}
                            style={[styles.iconContainer, { marginHorizontal: 5 }]}>
                            {leftIcon}
                        </TouchableOpacity>
                    }
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder={placeholder}
                            placeholderTextColor={colors.text.disabled}
                            value={value}
                            onChangeText={onChangeText}
                            secureTextEntry={secureTextEntry}
                            onSubmitEditing={onSubmitEditing}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            textContentType='oneTimeCode'
                            {...rest}
                        />
                    </View>
                </TouchableWithoutFeedback>
                {
                    rightIcon &&
                    <TouchableOpacity
                        onPress={() => onRightIconPress()}
                        style={{ right: 45, padding: 10 }}>
                        {rightIcon}
                    </TouchableOpacity>
                }
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        paddingVertical: scale(11),
        paddingHorizontal: scale(12),
        fontSize: fontSizes.button,
        fontWeight: fontWeights.regular,
        color: colors.text.secondary,
        width: '100%',
    }, labelStyle: {
        color: colors.text.secondary,
        marginTop: IOS ? 15 : 12,
        marginBottom: IOS ? 8 : 6
    }
});

export default Input;