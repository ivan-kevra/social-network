import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    InitialStateType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
} from "../../redux/users-reducer";
import {StateType} from "../../redux/redux-store";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";


type MapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}


class UsersContainer extends React.Component<any, any> {

    componentDidMount = () => {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    setCurrentPage = (currentPage: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
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
                       unfollow={this.props.unfollow}/>
            </>

        );
    }
}

let mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,}
)(UsersContainer)