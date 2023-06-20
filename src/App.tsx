import React from 'react';
import './App.css';
import {Navbar} from "./components/navBar/Navbar";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import {Login} from "./login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppRootStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";


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
                        <Route path="profile/:userId?" element={<ProfileContainer/>}/>
                        <Route path="dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="users/*" element={<UsersContainer/>}/>
                        <Route path="login/*" element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        );

    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    initialized: state.app.initialized
})
export default connect(mapStateToProps, {initializeApp})(App)
//compose можно использовать




