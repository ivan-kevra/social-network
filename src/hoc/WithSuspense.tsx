import {Navigate} from "react-router-dom";
import React, {Suspense} from "react";
import {Preloader} from "../components/common/preloader/Preloader";


export const withSuspense = (Component: any) => {
    return (props: any) => {
        return <Suspense fallback={<Preloader/>}>
            <Component {...props} />
        </Suspense>
    }
}

const DialogsContainer = React.lazy(() => import('../components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('../components/profile/ProfileContainer'));
const Login = React.lazy(() => import("../login/Login"));
const UsersContainer = React.lazy(() => import("../components/users/UsersContainer"));
export const DialogContainerWithSuspense = withSuspense(DialogsContainer)
export const ProfileContainerWithSuspense = withSuspense(ProfileContainer)
export const LoginWithSuspense = withSuspense(Login)
export const UsersContainerWithSuspense = withSuspense(UsersContainer)