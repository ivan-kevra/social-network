import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    InitialStateType,
    setCurrentPage,
    toggleIsFollowingProgress,
    unfollow,
} from "../../redux/users-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {Preloader} from "../common/preloader/Preloader";

type MapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

class UsersContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    setCurrentPage = (currentPage: number) => {
        this.props.getUsers(currentPage, this.props.pageSize)
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       setCurrentPage={this.setCurrentPage}
                       usersPage={this.props.usersPage}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}
                />
            </>

        );
    }
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsers
    }),
    // WithAuthRedirect
)(UsersContainer)