import React from 'react';
import './App.css';
import {Navbar} from "./components/navBar/Navbar";
import {Route, Routes} from "react-router-dom";

import HeaderContainer from "./components/header/HeaderContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppRootStateType} from "./redux/store";
import {Preloader} from "./components/common/preloader/Preloader";
import {
    DialogContainerWithSuspense, LoginWithSuspense,
    ProfileContainerWithSuspense,
    UsersContainerWithSuspense,
    withSuspense
} from "./hoc/WithSuspense";


class App extends React.Component<any, any> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="profile/:userId?"
                               element={<ProfileContainerWithSuspense/>}/>
                        <Route path="dialogs/*" element={<DialogContainerWithSuspense/>}/>
                        <Route path="users/*" element={<UsersContainerWithSuspense/>}/>
                        <Route path="login/*" element={<LoginWithSuspense/>}/>
                    </Routes>
                </div>
            </div>
        );

    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    initialized: state.app.initialized
})
export default connect(mapStateToProps, {
    initializeApp
})(App)





