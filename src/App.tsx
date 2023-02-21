import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navBar/NavBar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StateType, store} from "./redux/state";

type AppPropsType = {
    state: StateType
    addPost: () => void
    newPostText: string
    updateNewPostText: (newPostText: string) => void
    addMessage: () => void
    updateNewMessageText: (newMessageText: string) => void
    newMessageText: string
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
                                                                  addPost={props.addPost}
                                                                  updateNewPostText={props.updateNewPostText}
                                                                  newPostText={props.newPostText}
                        />}/>
                        <Route path="dialogs/*" element={<Dialogs
                            dialogsState={props.state.dialogsPage}
                            addMessage={props.addMessage}
                            updateNewMessageText={props.updateNewMessageText}
                            newMessageText={props.newMessageText}/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}




