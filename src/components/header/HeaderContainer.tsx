import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.setUserData(this.props.id, this.props.login, this.props.email)
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps, {setUserData})(HeaderContainer)