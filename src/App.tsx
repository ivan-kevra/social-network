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
import {StoreType} from "./StoreContext";


type AppPropsType = {
    // store: StoreType
}

export const App: React.FC<AppPropsType> = (props) => {
    // const state: StateType = props.store.getState()
    return (

        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="profile/*" element={<Profile />}/>
                    <Route path="dialogs/*" element={<DialogsContainer/>}/>
                </Routes>
            </div>

        </div>

    );
}




