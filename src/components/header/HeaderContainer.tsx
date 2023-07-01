import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logoutTC} from "../../redux/app-reducer";
import {AppRootStateType} from "../../redux/store";

class HeaderContainer extends React.Component<any, any> {

    // componentDidMount() {
    //     this.props.getUserData()
    //     // this.props.getUserData(this.props.id, this.props.login, this.props.email)
    // }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.app.isAuth,
    login: state.app.login,
})


export default connect(mapStateToProps, {logoutTC})(HeaderContainer)