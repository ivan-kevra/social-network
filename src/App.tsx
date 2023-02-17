import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navBar/NavBar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
    addPost: (title: string) => void
}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar navbar={props.state.navbar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="profile/*" element={<Profile profileState={props.state.profilePage}
                        addPost={props.addPost}/>}/>
                        <Route path="dialogs/*" element={<Dialogs dialogsState={props.state.dialogsPage}/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}




