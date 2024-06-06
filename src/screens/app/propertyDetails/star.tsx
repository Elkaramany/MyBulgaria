import React from 'react';
import { View } from 'react-native';
import { StarIcon, StarHalfFilled, StarFilled, StarEmpty } from '@assets';
import { Text } from '@components';
import { colors } from '@config';

interface Props {
    score: number
}

const Star: React.FC<Props> = ({ score }) => {
    const maxStars = 5;
    const filledStars = Math.floor(score);
    const hasHalfStar = score % 1 !== 0;

    const chosenStar = (type: 'full' | 'half' | 'empty', index: number) => {
        if (type === 'full') {
            return <StarFilled fill={colors.brand.primary} key={index} />
        } else if (type === 'half') {
            return <StarHalfFilled fill={colors.brand.primary} key={index} />
        }
        return <View />
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text value={score.toString()} color={colors.text.secondary} style={{ marginRight: 10, top: 3 }} />
            {Array.from({ length: maxStars }).map((_, index) => {
                if (index < filledStars) return chosenStar('full', index)
                else if (index === filledStars && hasHalfStar) return chosenStar('half', index)
            })}
        </View>
    )

};

export default Star;
