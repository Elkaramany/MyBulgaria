import React from 'react';
import { Text, TextStyle, ViewStyle, Platform, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import { colors, fontSizes, fontWeights, IOS } from '@config';

interface Props {
    value: string
    color?: string
    style?: TextStyle | ViewStyle | Array<ViewStyle | TextStyle> | Array<TextStyle | undefined>;
    big?: boolean
    bigger?: boolean
    small?: boolean
}

const TextComponent: React.FC<Props> = ({ value, color, style, big, bigger, small }) => {

    const getSizeOfFont = () => {
        if (value && value?.length > 1000) return IOS ? scale(fontSizes.caption) : scale(fontSizes.caption - 1);
        if (value && value?.length > 750) return IOS ? scale(fontSizes.button) : scale(fontSizes.button - 1);
        if (big) return IOS ? scale(fontSizes.title) : scale(fontSizes.title - 1);
        else if (bigger) return IOS ? scale(fontSizes.h4) : scale(fontSizes.h4 - 1);
        else if (small) return IOS ? scale(fontSizes.body) : scale(fontSizes.body - 1);
        return IOS ? scale(fontSizes.button) : scale(fontSizes.button - 1);
    };

    const getFontWeight = () => {
        if (bigger) return fontWeights.bold;
        else if (big) return fontWeights.medium;
        else return fontWeights.regular;
    };

    return (
        <Text style={[styles.text,
        {
            fontSize: getSizeOfFont(),
            color: color || bigger || big ? colors.ui.primary : colors.text.primary,
            fontWeight: getFontWeight(),
        }
            , style]}>
            {value}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
    }
})

export default TextComponent;
