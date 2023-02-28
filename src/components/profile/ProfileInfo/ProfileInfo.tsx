import React from 'react';
import {UserType} from "../../../redux/users-reducer";
import {Preloader} from "../../common/Preloader";

type ProfileInfoPropsType = {
    profile: UserType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                <img src={props.profile.photos.large}/>
                ava+description
            </div>
        );
    }

};
