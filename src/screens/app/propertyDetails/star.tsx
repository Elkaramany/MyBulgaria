import React from 'react';
import { View } from 'react-native';
import { StarIcon, StarHalfFilled, StarFilled, StarEmpty } from '@assets';
import { colors } from '@config';

interface Props {
    type: 'full' | 'half' | 'empty'
}

const Star: React.FC<Props> = ({ type }) => {

    const chosenStar = () => {
        if (type === 'full') {
            return <StarFilled fill={colors.brand.primary} />
        } else if (type === 'half') {
            return <StarHalfFilled fill={colors.brand.primary} />
        }
        return <View />
    }

    return (
        <View style={{ marginRight: 5 }}>
            {chosenStar()}
        </View>
    )

};

export default Star;
