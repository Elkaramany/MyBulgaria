import { Review } from "@redux";

export const calculateAverageScore = (reviews: Review[]): number => {
    if (reviews.length === 0) return 0;

    const totalScore = reviews.reduce((acc, review) => acc + review.score, 0);
    return totalScore / reviews.length;
}

type ReviewCounts = {
    excellent: number;
    veryGood: number;
    average: number;
};

export const categorizeReviews = (reviews: Review[]): ReviewCounts => {
    const counts: ReviewCounts = {
        excellent: 0,
        veryGood: 0,
        average: 0,
    };

    reviews.forEach(review => {
        if (review.score >= 4.5) {
            counts.excellent += 1;
        } else if (review.score >= 3.5) {
            counts.veryGood += 1;
        } else if (review.score >= 2.5) {
            counts.average += 1;
        }
    });

    return counts;
}