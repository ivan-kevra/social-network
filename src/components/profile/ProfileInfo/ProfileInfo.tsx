import React from 'react';
import {ProfileInfoType} from "../../../redux/profile-reducer";
import {Preloader} from '../../common/preloader/Preloader';
import {ProfileStatusWithHooks} from "./profileStatus/ProfileStatusWithHooks";


type ProfileInfoPropsType = {
    profileInfo: ProfileInfoType | null
    status: string
    updateStatus: () => void
}

export const ProfileInfo = ({profileInfo, status, updateStatus}: ProfileInfoPropsType) => {
    if (!profileInfo) {
        return <Preloader/>
    }
    return (
        <div>
            <img src={profileInfo.photos.large} alt='photo'/>
            <span> {profileInfo.fullName}</span>
            <span> {profileInfo.lookingForAJobDescription}</span>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    );


};
