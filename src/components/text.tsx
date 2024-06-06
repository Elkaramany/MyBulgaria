import React from 'react';
import { Text, TextStyle, ViewStyle, StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights, fonts } from '@config';

interface Props {
    value: string;
    color?: string;
    style?: TextStyle | ViewStyle | Array<ViewStyle | TextStyle> | Array<TextStyle | undefined>;
    small?: boolean
    caption?: boolean; // Prop to specify caption font size
    button?: boolean; // Prop to specify button font size
    body?: boolean; // Prop to specify body font size
    title?: boolean; // Prop to specify title font size
    h4?: boolean;
    h3?: boolean; // Prop to specify h3 font size
    h2?: boolean; // Prop to specify h2 font size
    h1?: boolean; // Prop to specify h1 font size
    regular?: boolean; // Prop to specify regular font weight
    medium?: boolean; // Prop to specify medium font weight
    lightBold?: boolean; // Prop to specify light bold font weight
    bold?: boolean; // Prop to specify bold font weight
}

const TextComponent: React.FC<Props> = ({ value, color, style, caption, small, button, body, title, h4, h3, h2, h1, regular, medium, lightBold, bold }) => {
    // Dynamically create style array based on props
    const stylesArray: Array<TextStyle | undefined> = [];

    if (small) {
        stylesArray.push({ fontSize: fontSizes.small });
    }

    if (caption) {
        stylesArray.push({ fontSize: fontSizes.caption });
    }

    if (button) {
        stylesArray.push({ fontSize: fontSizes.button });
    }

    if (body) {
        stylesArray.push({ fontSize: fontSizes.body });
    }

    if (title) {
        stylesArray.push({ fontSize: fontSizes.title });
    }

    if (h4) {
        stylesArray.push({ fontSize: fontSizes.h4 });
    }

    if (h3) {
        stylesArray.push({ fontSize: fontSizes.h3 });
    }

    if (h2) {
        stylesArray.push({ fontSize: fontSizes.h2 });
    }

    if (h1) {
        stylesArray.push({ fontSize: fontSizes.h1 });
    }

    if (regular) {
        stylesArray.push({ fontWeight: fontWeights.regular });
    }

    if (medium) {
        stylesArray.push({ fontWeight: fontWeights.medium });
    }

    if (lightBold) {
        stylesArray.push({ fontWeight: fontWeights.lightBold });
    }

    if (bold) {
        stylesArray.push({ fontWeight: fontWeights.bold });
    }

    return (
        <Text style={[styles.text, ...stylesArray, { color: color || colors.text.primary }, style]}>
            {value}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: fonts.body, // Default font family
    },
});

export default TextComponent;
