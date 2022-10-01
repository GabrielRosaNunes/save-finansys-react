import { createContext,  ReactNode,  useReducer,  useState } from "react";

export interface StoreData {
    logged:boolean,
    userEmail:string,
    userFoto:string
}

type StoreAction = 
    | { type: 'LOGIN', user: { userEmail: string,userFoto: string} }
    | { type: 'LOGOUT' }

interface StoreContextType {
    state: StoreData,
    dispatch: React.Dispatch<StoreAction>
}

const initialState:StoreData = {
    logged:false,
    userEmail:'',
    userFoto:''
}




export const StoreContext = createContext<StoreContextType>({
    state: initialState,
    dispatch: () => {}
})

function reducer(state:StoreData,action:StoreAction):StoreData {
    switch(action.type) {
        case 'LOGIN':
            return {
                logged:true,
                userEmail: action.user.userEmail,
                userFoto: action.user.userFoto
            }
        case 'LOGOUT':
            return {
                logged:false,
                userEmail: '',
                userFoto:''
            }
        default:
            return {
                logged:false,
                userEmail: '',
                userFoto: ''
            }
    }
}


interface StoreContextProviderProps {
    children:ReactNode
}

export const StoreContextProvider = (props:StoreContextProviderProps) => {
    const [stateReducer,dispatch] = useReducer(reducer,initialState)

    const valueReducer: StoreContextType = {
        state: stateReducer,
        dispatch: dispatch
    }

    return (
        <StoreContext.Provider value={valueReducer}>
            {props.children}
        </StoreContext.Provider>
    )
}