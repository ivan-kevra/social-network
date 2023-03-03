import React from 'react';
import './App.css';
import {Navbar} from "./components/navBar/Navbar";
import {Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import {Login} from "./login/Login";


export const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="profile/:userId?" element={<ProfileContainer/>}/>
                    <Route path="dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="users/*" element={<UsersContainer/>}/>
                    <Route path="login/*" element={<Login/>}/>
                </Routes>
            </div>

        </div>

    );
}




