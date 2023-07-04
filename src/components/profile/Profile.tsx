import React from "react";
import style from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer"
import {ProfileInfoType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profileInfo: ProfileInfoType | null
    status: string
    updateStatus: () => void
    isOwner: boolean
    savePhoto: (mainPhoto: any) => void
    saveProfile: (formData: any) => void

}

export const Profile = ({
                            profileInfo, isOwner, status, updateStatus, savePhoto,
                            saveProfile
                        }: ProfilePropsType) => {
    return (
        <div className={style.content}>
            <ProfileInfo profileInfo={profileInfo}
                         status={status}
                         updateStatus={updateStatus}
                         isOwner={isOwner}
                         savePhoto={savePhoto}
                         saveProfile={saveProfile}
            />
            <MyPostsContainer/>
        </div>
    )
}