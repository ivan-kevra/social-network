import React from 'react';
import {UserType} from "../../../redux/users-reducer";
import {Preloader} from "../../common/Preloader";
import {ProfileInfoType} from "../../../redux/profile-reducer";
import ProfileStatus from "./profileStatus/ProfileStatus";

type ProfileInfoPropsType = {
    profileInfo: ProfileInfoType | null
    status: string
    updateStatus: () => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profileInfo) {
        return <Preloader/>
    }
    return (
        <div>
            <img src={props.profileInfo.photos.large}/>
            <span> {props.profileInfo.fullName}</span>
            <span> {props.profileInfo.lookingForAJobDescription}</span>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );


};
