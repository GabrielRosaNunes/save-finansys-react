import appFirebase from "../Config/FirebaseConfiguration";
import {getFirestore, collection, getDocs,query, setDoc, addDoc, doc, getDoc, deleteDoc, where} from 'firebase/firestore/lite'
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export default class Firebase {
    table:string;
    userEmail:string;

    constructor(table:string,userEmail:string = "") {
        this.table = table;
        this.userEmail = userEmail;
    }

    async getAll():Promise<Object[]>{
        const q = query(this.collection(),where("userEmail","==",this.userEmail))
        const querySnapshot = await getDocs(q)
        return querySnapshot.docs.map(doc => {
            const docData = doc.data()
            return {"id":doc.id,...docData};
        }) ?? []
    }

    async getData(id?:string) {
        const ref = doc(this.collection(),id ?? '')
        const docSnap = await getDoc(ref);
        return docSnap.exists() ? docSnap.data() : null
    }

    async insertData(data:any) {
        const docRef = await addDoc(this.collection(),{
            ...data,
            userEmail: this.userEmail
        });
        return docRef
    }

    async updateData(data:any,id?:string) {
        const docRef = doc(this.collection(),id ?? '')
        await setDoc(docRef,data)
    }

    async deleteData(id?:string) {
        const ref = doc(this.collection(),id ?? '')
        await deleteDoc(ref)
    }

    signInGmail() {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        return signInWithPopup(auth,provider)
    }

    signInEmail(email:string, password:string) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth,email,password);
    }

    signOut() {
        const auth = getAuth();
        return signOut(auth);
    }

    createUserEmail(email:string,password:string) {
        const auth = getAuth();
        return createUserWithEmailAndPassword(auth,email,password);
    }

    private collection() {
        return collection(getFirestore(appFirebase),this.table)
    }
}