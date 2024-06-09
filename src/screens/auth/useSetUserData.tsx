import { useAuthActions } from '@redux';
import { JWTObject } from '@request';

const useSetUserData = () => {
    const { setId, setEmail, setName, setJWT, setScore, setVisited, setReviews } = useAuthActions();

    const setUserData = (data: JWTObject) => {
        if (data) {
            setName(data.user.username);
            setId(data.user.id);
            setJWT(data.jwt);
            if (data.user.email) setEmail(data.user.email);
            if (data.user.score) setScore(data.user.score);
            if (data.user.visited.length > 0) setVisited(data.user.visited);
            if (data.user.reviews.length > 0) setReviews(data.user.reviews);
        }
    };

    return setUserData
};

export default useSetUserData;
