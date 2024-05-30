import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Text from './text'
import { scale, verticalScale } from 'react-native-size-matters';
import { globalStyles, colors } from '../config';

interface Props {
    onPress: () => void;
    selected: boolean;
    str: string;
}

const RADIO_BUTTON_SIZE = scale(10);
const RADIO_BUTTON_OUTER_SIZE = scale(23);

const RadioBtn: React.FC<Props> = ({ onPress = () => { }, selected, str }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress()}>
            <View
                style={[
                    styles.radioButtonOuter,
                    {
                        width: RADIO_BUTTON_OUTER_SIZE,
                        height: RADIO_BUTTON_OUTER_SIZE,
                        borderRadius: RADIO_BUTTON_OUTER_SIZE / 2,
                        borderColor: colors.primary,
                        backgroundColor: selected ? colors.blue : colors.light,
                    },
                ]}
            >
                {selected &&
                    <View
                        style={[
                            styles.radioButtonInner,
                            {
                                width: RADIO_BUTTON_SIZE,
                                height: RADIO_BUTTON_SIZE,
                                borderRadius: RADIO_BUTTON_SIZE / 2,
                                backgroundColor: colors.primary,
                            },
                        ]}
                    />
                }
            </View>
            <Text str={str} style={{ paddingLeft: scale(10), fontWeight: 'bold' }} />
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: verticalScale(10),
        marginVertical: verticalScale(15)
    },
    radioButtonOuter: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: scale(2),
        borderRadius: RADIO_BUTTON_OUTER_SIZE / 2,
    },
    radioButtonInner: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default RadioBtn;