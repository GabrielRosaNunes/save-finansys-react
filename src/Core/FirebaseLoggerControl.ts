import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const createUserEmail = async (email:string,password:string) => {
    const auth = getAuth()
    return await createUserWithEmailAndPassword(auth,email,password)
}

export const signInWithGmail =  () => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    return  signInWithPopup(auth,provider)
}

export const signInWithEmail =  (email:string,password:string) => {
    const auth = getAuth()
    return  signInWithEmailAndPassword(auth,email,password);
}

export const signOutApp = async () => {
    const auth = getAuth()

    return await signOut(auth)
}
