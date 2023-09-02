import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer.js'

const intialState = {
    transactions: []
}

// Create Context
export const GlobalContext = createContext(intialState);

// Provider Component
export const GlobalProvider =({children}) => {
    const [state,dispatch] = useReducer(AppReducer ,intialState);

    //Action DELETE
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    //Action ADD
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction}}>
            {children}
        </GlobalContext.Provider>
    );
}