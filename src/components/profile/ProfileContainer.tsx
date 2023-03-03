import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/profile-reducer";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";


class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.setUserProfileData(this.props.router.params.userId)
    }

    render() {
        if (!this.props.isAuth) return <Navigate to={'/login'}/>
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

const mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profileInfo,
    isAuth: state.auth.isAuth
})

let WithUrlDattaContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUserProfileData: getUserProfile})(WithUrlDattaContainerComponent)