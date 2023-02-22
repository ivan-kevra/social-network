import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navBar/NavBar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {EmptyObject, Store} from "redux";
import {ActionType, DialogsPageType, ProfilePageType, SidebarType, StateType} from "./redux/store";
import {store} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


type AppPropsType = {
    store: Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebar: SidebarType }, ActionType>
}

export const App: React.FC<AppPropsType> = (props) => {
    const state: StateType = props.store.getState()
    return (

        <div className="app-wrapper">
            <Header/>
            <NavBar navbar={state.sidebar}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="profile/*" element={<Profile store={props.store}/>}/>
                    <Route path="dialogs/*" element={<DialogsContainer store={props.store}/>}/>
                </Routes>
            </div>

        </div>

    );
}




