import React, {ChangeEvent, useState} from 'react';
import {getUserProfile, ProfileInfoType} from "../../../redux/profile-reducer";
import {Preloader} from '../../common/preloader/Preloader';
import {ProfileStatusWithHooks} from "./profileStatus/ProfileStatusWithHooks";
import avatar from "../../../assets/images/avatar.jpg";
import style from './ProfileInfo.module.css'
import {Contact, ProfileDataForm} from "./ProfileDataForm";

type ProfileInfoPropsType = {
    profileInfo: ProfileInfoType | null
    status: string
    updateStatus: () => void
    isOwner: boolean
    savePhoto: (mainPhoto: any) => void
    saveProfile: (formData: any) => void

}

export const ProfileInfo = ({
                                profileInfo,
                                status,
                                updateStatus,
                                isOwner,
                                savePhoto,
                                saveProfile,
                            }: ProfileInfoPropsType) => {
    const [editMode, setEditMode] = useState(false)
    if (!profileInfo) {
        return <Preloader/>
    }
    const mainPhotoSelected = (event: any) => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0])
        }
    }

    const activateEditMode = () => setEditMode(true)
    const activateViewMode = (value: boolean) => {
        setEditMode(value)
    }
    return (
        <>
            <img src={profileInfo?.photos.large || avatar} alt='photo' className={style.mainPhoto}/>
            {isOwner && <input type="file" onChange={mainPhotoSelected}/>}
            {editMode
                ? <ProfileDataForm profileInfo={profileInfo}
                                   saveProfile={saveProfile}
                                   activateViewMode={activateViewMode}/>
                : <ProfileData profileInfo={profileInfo} isOwner={isOwner} activateEditMode={activateEditMode}/>
            }
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </>

    )
        ;
};


type ProfileDataPropsType = {
    profileInfo: ProfileInfoType
    isOwner: boolean
    activateEditMode: () => void
}
const ProfileData = ({profileInfo, isOwner, activateEditMode}: ProfileDataPropsType) => {
    return <div>
        {isOwner && <button onClick={activateEditMode}>edit</button>}
        <div>
            <b>Full name</b>: {profileInfo?.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profileInfo?.lookingForAJob ? "yes" : "no"}
        </div>
        {profileInfo?.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profileInfo?.lookingForAJobDescription}
            </div>
        }

        <div>
            <b>About me</b>: {profileInfo?.aboutMe}
        </div>

        <div>
            <b>Contacts</b>: {
            // @ts-ignore
            Object.keys(profileInfo.contacts).map((key: any) => {
                // @ts-ignore
                return <Contact key={key} contactTitle={key} contactValue={profileInfo.contacts[key]}/>
            })
        }
        </div>
    </div>
}

