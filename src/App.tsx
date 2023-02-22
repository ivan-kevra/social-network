import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navBar/NavBar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ActionType, StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
    newPostText: string
    newMessageText: string
}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar navbar={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="profile/*" element={<Profile profileState={props.state.profilePage}
                                                                  dispatch={props.dispatch}
                                                                  newPostText={props.newPostText}
                        />}/>
                        <Route path="dialogs/*" element={<Dialogs
                            dialogsState={props.state.dialogsPage}
                            dispatch={props.dispatch}
                            newMessageText={props.newMessageText}/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}




