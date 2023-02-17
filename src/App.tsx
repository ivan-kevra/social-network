import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navBar/NavBar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {DialogType, MessageType, PostType} from "./index";


export type AppPropsType = {
    posts: PostType[]
    messages: MessageType[]
    dialogs: DialogType[]
}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile/*"
                               element={<Profile posts={props.posts}/>}/>
                        <Route path="/dialogs/*"
                               element={<Dialogs messages={props.messages} dialogs={props.dialogs}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}





