import {getFirestore, collection, getDocs,query, setDoc, addDoc, doc, getDoc, deleteDoc, where, QueryDocumentSnapshot, DocumentData, FirestoreDataConverter, WithFieldValue} from 'firebase/firestore/lite'
import appFirebase from "../Config/FirebaseConfiguration";
import {  StoreData } from '../contexts/StoreContext';

export interface ConnectCollectionFunctions<T> {
    getAll: () => Promise<T[]>;
    getData: (id?:string) => Promise<T |null>;
    insertData: (data: T) => Promise<T | null>;
    updateData: (data:T,id?:string) => Promise<void>;
    deleteData: (id?:string) => Promise<void>;
}

export const connectCollection = <T extends object>(table:string,state:StoreData):ConnectCollectionFunctions<T> => {
    const genericConverter:FirestoreDataConverter<T> = {
        toFirestore(modelObject){
            return modelObject;
        },
        fromFirestore(snapshot:QueryDocumentSnapshot) {
            return snapshot.data() as T;
        }
    }
    const connection = collection(
        getFirestore(appFirebase),
        table
    ).withConverter(genericConverter)


    return {
        async getAll():Promise<T[]>{
            const queryAll = query(
                connection, 
                where("userEmail","==",state.userEmail)
            )
            const querySnapshot = await getDocs(queryAll)
            return querySnapshot.docs.map(doc =>  {
                const docData = doc.data()
                return {
                    id:doc.id,
                    ...docData
                } as T
            })
        },
        async getData(id?:string):Promise<T|null>{
            const ref = doc(connection, id ?? '')
            const docSnap = await getDoc(ref)
            return docSnap.exists() ? docSnap.data() as T: null
        },
        async insertData(data:T): Promise<T | null> {
            const docRef = await addDoc(connection,{
                ...data,
                userEmail: state.userEmail
            } as DocumentData)
            return docRef as T
        },
        async updateData(data:T,id?:string):Promise<void> {
            const docRef = doc(connection,id ?? '')
            await setDoc(docRef,data as WithFieldValue<T>)
        },
        async deleteData(id?:string):Promise<void> {
            const docRef = doc(connection,id ?? '')
            await deleteDoc(docRef)
        }
    } 
}