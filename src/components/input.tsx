import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TextInputProps, ViewStyle, TouchableOpacity } from 'react-native';
import { colors, fontSizes, fontWeights, globalStyles, lineHeights, validatePassword } from '@config';
import { scale, verticalScale } from 'react-native-size-matters';
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
}

const Input: React.FC<Props> = ({
    label, placeholder, value, onChangeText, secureTextEntry, onSubmitEditing, rightIcon, leftIcon, hint, buttonStyle, onRightIconPress, ...rest
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
                    style={styles.labelStyle}
                />
            }
            <TouchableWithoutFeedback
                style={[{
                    backgroundColor: colors.bg.primary,
                    borderColor: colors.bg.tertiary,
                    borderWidth: 2,
                    borderRadius: 15,
                }, buttonStyle]}
                onPress={() => handleFocus()}>
                <View style={styles.inputContainer}>
                    {leftIcon && <View style={styles.iconContainer}>{leftIcon}</View>}
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
                        {...rest}
                    />
                    {rightIcon &&
                        <TouchableOpacity
                            onPress={() => onRightIconPress()}
                            style={styles.iconContainer}>
                            {rightIcon}
                        </TouchableOpacity>}
                </View>
            </TouchableWithoutFeedback>
        </>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 10
    },
    input: {
        paddingVertical: scale(11),
        paddingHorizontal: scale(12),
        fontSize: fontSizes.button,
        fontWeight: fontWeights.regular,
        color: colors.text.secondary,
    }, labelStyle: {
        color: colors.text.secondary,
        marginTop: 15,
        marginBottom: 8
    }
});

export default Input;