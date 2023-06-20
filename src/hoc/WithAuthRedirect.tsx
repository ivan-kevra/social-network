import {Navigate} from "react-router-dom";
import React from "react";
import {AppRootStateType} from "../redux/redux-store";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state: AppRootStateType) => ({
    isAuth: state.app.isAuth
})

export const WithAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'}/>

            return <Component {...this.props}/>
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedRedirectComponent
}