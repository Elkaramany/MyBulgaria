

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

async function signUp(userData: signUpData): Promise<userData> {
    return { uid: '123', email: 'test@test.com', name: 'mostafa' };

}

async function signIn(signInData: signInData): Promise<userData> {
    return { uid: '123', email: 'test@test.com', name: 'mostafa' };
}


export { signUp, signIn }