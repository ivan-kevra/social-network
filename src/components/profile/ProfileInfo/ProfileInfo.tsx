import React, {ChangeEvent} from 'react';
import {ProfileInfoType} from "../../../redux/profile-reducer";
import {Preloader} from '../../common/preloader/Preloader';
import {ProfileStatusWithHooks} from "./profileStatus/ProfileStatusWithHooks";
import avatar from "../../../assets/images/avatar.jpg";
import style from './ProfileInfo.module.css'

type ProfileInfoPropsType = {
    profileInfo: ProfileInfoType | null
    status: string
    updateStatus: () => void
    isOwner: boolean
    savePhoto: (mainPhoto: any) => void
}

export const ProfileInfo = ({profileInfo, status, updateStatus, isOwner, savePhoto}: ProfileInfoPropsType) => {
    if (!profileInfo) {
        return <Preloader/>
    }

    const mainPhotoSelected = (event: any) => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0])
        }
    }

    return (
        <div>
            <img src={profileInfo.photos.large || avatar} alt='photo' className={style.mainPhoto}/>
            {isOwner && <input type="file" onChange={mainPhotoSelected}/>}
            <span> {profileInfo.fullName}</span>
            <span> {profileInfo.lookingForAJobDescription}</span>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    );


};
