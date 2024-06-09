import React from 'react';
import { Alert } from 'react-native';
import { Button, Spinner } from '@components';
import { useAuthActions } from '@redux';
import { AuthStacknavigationProp } from '@navigationTypes';
import { colors } from '@config';
import { scale } from 'react-native-size-matters';
import { signIn } from '@request';
import EmailPassword from './EmailPassword';
import Auth from './Auth';

interface Props {
    navigation: AuthStacknavigationProp<'SignIn'>;
}

const Login: React.FC<Props> = ({ navigation }) => {
    const { email, password, setId, setName, authLoading, switchAuthLoader, setJWT, setScore, setVisited, setReviews } = useAuthActions();

    React.useEffect(() => {
        switchAuthLoader(false)
    }, [])

    const trySignIn = async () => {
        switchAuthLoader(true)
        const response = await signIn({ email, password });
        if (response) {
            setName(response.user.username)
            setId(response.user.id)
            setJWT(response.jwt)
            if (response.user.score) setScore(response.user.score)
            if (response.user.visited.length > 0) setVisited(response.user.visited)
            if (response.user.reviews.length > 0) setVisited(response.user.reviews)
        }
        switchAuthLoader(false)
    };

    return (
        <Auth>
            <EmailPassword title='Login' userName={false} />
            {authLoading ?
                <Spinner />
                :
                <>
                    <Button
                        onPress={trySignIn}
                        value='Login'
                        buttonStyle={{ marginTop: scale(30) }}
                    />
                    <Button
                        onPress={() => navigation.navigate('SignUp')}
                        value='Create account'
                        buttonStyle={{ backgroundColor: colors.bg.primary }}
                        textStyle={{ color: colors.text.secondary }}
                    />
                </>
            }
        </Auth>
    );
};

export default Login;
