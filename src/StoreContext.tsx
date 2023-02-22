import React from 'react'
import {ActionType, StateType} from "./redux/store";
import {store} from "./redux/redux-store";
import {EmptyObject, Store} from "redux";

export type StoreType = Store<EmptyObject & StateType, ActionType>

export const StoreContext = React.createContext({} as typeof store)

export type ProviderType = {
    store: StoreType
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}
