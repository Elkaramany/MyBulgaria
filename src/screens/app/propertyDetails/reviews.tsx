import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from '@components'
import { WIDTH, colors, globalStyles } from '@config'
import { StarIcon } from '@assets'
import { calculateAverageScore } from './utils'
import Star from './star'
import { PropertyType, Review } from '@redux'

interface Props {
    reviews: Review[]
}

const Reviews: React.FC<Props> = ({ reviews }) => {
    const score = calculateAverageScore(reviews)
    const maxStars = 5;
    const filledStars = Math.floor(score);
    const hasHalfStar = score % 1 !== 0;

    return (
        <ScrollView style={{ marginBottom: 15 }} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text value={score.toString()} color={colors.text.secondary} style={{ marginRight: 10, top: 3 }} />
                {Array.from({ length: maxStars }).map((_, index) => {
                    if (index < filledStars) {
                        return <Star key={index} type="full" />;
                    } else if (index === filledStars && hasHalfStar) {
                        return <Star key={index} type="half" />;
                    } else {
                        return <Star key={index} type="empty" />;
                    }
                })}
            </View>
            <Text value={`${reviews.length.toString()} reviews`} regular button color={colors.text.quaternary} />
            <Text value='Excellent' lightBold regular color={colors.text.secondary} />
        </ScrollView>
    )
}

export default Reviews

const styles = StyleSheet.create({

})