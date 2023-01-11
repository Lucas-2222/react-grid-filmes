import React, { createContext, useContext, useState, useReducer, ReactNode} from "react";
import { number, UseReducer} from '../reducers/useReducer';

type ContexType = {
    numero: number;
    save: (numero: number) => void;
}

type Props = {
    children: React.ReactNode;
}

const UserContext = createContext<ContexType>({} as ContexType)

const UserProvider = ({children}: Props): JSX.Element => {    
    //const [numero, setState] = useState<any>(5)
    const [numero, dispatch] = useReducer(UseReducer,number)

    const save = (numero: number) =>{
        dispatch({
            type:'save',
            payload:{numero} 
        })
    }

    return (
        <UserContext.Provider value={{numero, save}}>
            {children}
        </UserContext.Provider>
    )
}

function userApi(){
    const context = useContext(UserContext);
    if(!context){
        throw new Error('error')
    }
    return context;
}
export {UserProvider, userApi}