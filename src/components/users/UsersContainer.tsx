import React from 'react';
import {connect} from "react-redux";
import {follow, requestUsers, setCurrentPage, toggleIsFollowingProgress, unfollow,} from "../../redux/users-reducer";
import {AppRootStateType} from "../../redux/store";
import {Users} from "./Users";
import {compose} from "redux";
import {Preloader} from "../common/preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component<any, any> {

    componentDidMount() {
        const {requestUsers, currentPage, pageSize} = this.props
        requestUsers(currentPage, pageSize)
    }

    setCurrentPage = (currentPage: number) => {
        const {requestUsers, pageSize} = this.props
        requestUsers(currentPage, pageSize)
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


let mapStateToProps = (state: AppRootStateType) => {
    return {
        usersPage: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, toggleIsFollowingProgress, requestUsers
    }),
)(UsersContainer)