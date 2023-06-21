import React from 'react';

import {ProfileInfoType} from "../../../redux/profile-reducer";
import {Preloader} from '../../common/preloader/Preloader';
import ProfileStatus from "./profileStatus/ProfileStatus";
import {ProfileStatusWithHooks} from "./profileStatus/ProfileStatusWithHooks";


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
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );


};
