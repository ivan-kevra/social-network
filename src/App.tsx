import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navBar/Navbar";
import {Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";


export const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="profile/:userId?" element={<ProfileContainer/>}/>
                    <Route path="dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="users/*" element={<UsersContainer/>}/>
                </Routes>
            </div>

        </div>

    );
}




