import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {Dialogs} from "../Dialogs/Dialogs";


class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.setUserProfileData(this.props.router.params.userId)
    }

    render() {

        return (
            <Profile {...this.props} profileInfo={this.props.profile}/>
        )
    }
}


function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}


let mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profileInfo,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)

