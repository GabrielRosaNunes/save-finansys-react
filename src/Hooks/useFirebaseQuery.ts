import { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";
import { connectCollection, ConnectCollectionFunctions } from "../Core/FirebaseQuery";


export function useFirebaseQuery<T extends object>(table:string):ConnectCollectionFunctions<T> {
    const {state} = useContext(StoreContext)

    return {
        ...connectCollection<T>(table,state)
    }
}