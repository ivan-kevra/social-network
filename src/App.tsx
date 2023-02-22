import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navBar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


type AppPropsType = {
    // store: StoreType
}

export const App: React.FC<AppPropsType> = (props) => {
    // const state: StateType = props.store.getState()
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="profile/*" element={<Profile />}/>
                    <Route path="dialogs/*" element={<DialogsContainer/>}/>
                </Routes>
            </div>

        </div>

    );
}




