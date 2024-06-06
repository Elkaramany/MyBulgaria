import { ScrollView, StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { Button, Text } from '@components'
import { WIDTH, colors, globalStyles } from '@config'
import { calculateAverageScore, categorizeReviews, transformDate } from './utils'
import Star from './star'
import { Review } from '@redux'
import { ProfileIcon } from '@assets'

interface Props {
    reviews: Review[]
}

const Reviews: React.FC<Props> = ({ reviews }) => {

    const reviewCategory = (title: string, percentage: number) => {
        const barLength = WIDTH * 0.5
        const green = percentage * barLength;

        return (
            <View style={{ width: barLength, justifyContent: 'center', marginVertical: 2 }}>
                <Text value={title} lightBold regular color={colors.text.secondary} />
                <View style={{ flexDirection: 'row', alignItems: 'center', width: barLength, borderRadius: 5 }}>
                    <View
                        style={[styles.categoryReviewStyle,
                        {
                            width: green,
                            backgroundColor: title === 'Average' ? '#9CAD34' : '#34AD51'
                        }]}
                    />
                    <View style={[styles.offCategoryReviewStyle, { width: barLength - green }]} />
                </View>
            </View >
        )
    }

    const renderItem = (review: Review, index: number) => {
        return (
            <View key={index}>
                <View style={[globalStyles.rowBetween, { marginBottom: 5 }]}>
                    <ProfileIcon fill={colors.text.tertiary} />
                    <View>
                        <Text value={'Jane Cooper'}
                            caption lightBold color={colors.text.quaternary}
                        />
                        <Star score={review.score} />
                    </View>
                    <View />
                    <Text value={transformDate(review.published_at)} caption lightBold color={colors.text.quaternary} />
                </View>

                <Text value={'Semper'} lightBold body color={colors.text.secondary} />
                <Text value={review.description} regular button color={colors.text.quaternary} />
                <View style={styles.reviewSeperator} />
            </View>
        )
    }

    return (
        <ScrollView style={{ marginBottom: 15 }} contentContainerStyle={{ flexGrow: 1 }}>
            <Star score={calculateAverageScore(reviews)} />

            <Text value={`${reviews.length.toString()} reviews`} regular button color={colors.text.quaternary} />
            {reviewCategory("Excellent", (categorizeReviews(reviews).excellent) / reviews.length)}
            {reviewCategory("Very Good", (categorizeReviews(reviews).veryGood) / reviews.length)}
            {reviewCategory("Average", (categorizeReviews(reviews).average) / reviews.length)}
            <Text
                value='Reviews' h4 lightBold color={colors.text.secondary}
            />

            {reviews.map((review, index) => renderItem(review, index))}
            {/*
        <Button
                value='See all reviews'
                onPress={() => { }}
                buttonStyle={{
                    backgroundColor: colors.bg.primary,
                    borderWidth: 2,
                    borderColor: colors.brand.primary,
                    borderRadius: 15,
                    width: '100%',
                }}
                textStyle={{ color: colors.text.secondary, paddingVertical: 12 }}
            />
            */
            }
        </ScrollView>
    )
}

export default Reviews

const styles = StyleSheet.create({
    categoryReviewStyle: {
        height: 4,
        backgroundColor: '#34AD51',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    }, offCategoryReviewStyle: {
        height: 2,
        backgroundColor: '#B8B8B8',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    }, reviewSeperator: {
        marginVertical: 10,
        width: '100%',
        height: 1,
        backgroundColor: colors.bg.tertiary,

    }
})