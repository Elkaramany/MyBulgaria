

interface signUpData {
    email: string;
    password: string;
    name: string;
}

interface signInData {
    email: string
    password: string
}

interface userData {
    uid: string;
    email: string;
    name: string;
}

async function firebaseSignUp(userData: signUpData): Promise<userData> {
    return { uid: '123', email: 'test@test.com', name: 'mostafa' };

}

async function firebaseSignIn(signInData: signInData): Promise<userData> {
    return { uid: '123', email: 'test@test.com', name: 'mostafa' };
}


export { firebaseSignIn, firebaseSignUp }