import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 26512
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)

    }

    render() {
        return (
            <Profile {...this.props} profileInfo={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
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
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)

