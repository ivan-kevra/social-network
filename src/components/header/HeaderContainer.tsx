import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";
import {headerAPI} from "../../api/api";

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        headerAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                this.props.setAuthUserData(id, login, email)
            }
        })
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


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)