import { Review } from "@redux";

export const calculateAverageScore = (reviews: Review[]): number => {
    if (reviews.length === 0) return 0;

    const totalScore = reviews.reduce((acc, review) => acc + review.score, 0);
    return totalScore / reviews.length;
}
