import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TextInputProps, ViewStyle } from 'react-native';
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
}

const Input: React.FC<Props> = ({
    label, placeholder, value, onChangeText, secureTextEntry, onSubmitEditing, rightIcon, leftIcon, hint, buttonStyle, ...rest
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <TouchableWithoutFeedback
            style={[{
                backgroundColor: colors.ui.disabled,
                borderColor: isFocused ? colors.brand.secondary : colors.ui.secondary,
                borderBottomWidth: 2,
                borderRadius: verticalScale(2),
                paddingHorizontal: scale(10),
                width: '100%',
            }, buttonStyle]}
            onPress={() => handleFocus()}>
            {label &&
                <Text
                    value={label}
                    style={[styles.labelStyle, { color: isFocused ? colors.brand.secondary : colors.text.secondary }]}
                />
            }
            <View style={styles.inputContainer}>
                {leftIcon && <View style={styles.iconContainer}>{leftIcon}</View>}
                <TextInput
                    style={[
                        styles.input,
                        {
                            paddingLeft: leftIcon ? 15 : 0,
                            paddingRight: rightIcon ? 15 : 0,
                        },
                    ]}
                    placeholder={placeholder}
                    placeholderTextColor={colors.text.secondary}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    onSubmitEditing={onSubmitEditing}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...rest}
                />
                {rightIcon && <View style={styles.iconContainer}>{rightIcon}</View>}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        paddingHorizontal: 10,
    },
    input: {
        paddingVertical: verticalScale(5),
        marginBottom: verticalScale(3.5),
        fontSize: fontSizes.button,
        fontWeight: fontWeights.regular,
        color: colors.text.primary,
    }, labelStyle: {
        fontSize: fontSizes.body,
        marginTop: lineHeights.copy,
        fontWeight: fontWeights.medium,
        color: colors.text.secondary
    }
});

export default Input;