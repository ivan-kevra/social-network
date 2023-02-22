import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navBar/NavBar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {EmptyObject, Store} from "redux";
import {ActionType, DialogsPageType, ProfilePageType, SidebarType, StateType} from "./redux/store";


type AppPropsType = {
    store: Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebar: SidebarType }, ActionType>
}

export const App: React.FC<AppPropsType> = (props) => {
    const state: StateType = props.store.getState()
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar navbar={state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="profile/*" element={<Profile profileState={state.profilePage}
                                                                  dispatch={props.store.dispatch.bind(props.store)}
                                                                  newPostText={state.profilePage.newPostText}
                        />}/>
                        <Route path="dialogs/*" element={<Dialogs
                            dialogsState={state.dialogsPage}
                            dispatch={props.store.dispatch.bind(props.store)}
                            newMessageText={state.dialogsPage.newMessageText}/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}




