import React from 'react';
import {ProfileInfoType} from "../../../redux/profile-reducer";
import {Input, Textarea} from "../../common/FormsControls/FormControls";
import {useFormik} from "formik";
import style from "./ProfileInfo.module.css";

type ProfileDataFormPropsType = {
    profileInfo: ProfileInfoType
    saveProfile: (formData: any) => void
    activateViewMode: (value: boolean) => void,
}

export const ProfileDataForm = ({profileInfo, saveProfile, activateViewMode}: ProfileDataFormPropsType) => {
    const formik = useFormik({
        initialValues: {
            fullName: profileInfo.fullName,
            lookingForAJob: profileInfo.lookingForAJob,
            lookingForAJobDescription: profileInfo.lookingForAJobDescription,
            aboutMe: profileInfo.aboutMe,
            contacts: {
                facebook: profileInfo.contacts.facebook,
                website: profileInfo.contacts.website,
                vk: profileInfo.contacts.vk,
                twitter: profileInfo.contacts.twitter,
                instagram: profileInfo.contacts.instagram,
                youtube: profileInfo.contacts.youtube,
                github: profileInfo.contacts.github,
                mainLink: profileInfo.contacts.mainLink,
            }
        },
        onSubmit: (values) => {
            console.log(values)
            saveProfile(values)
            activateViewMode(false)
        },
    })
    return <form onSubmit={formik.handleSubmit}>
        <button type="submit">save</button>
        <div>
            <b>Full name</b>: <Input
            {...formik.getFieldProps('fullName')}
            onBlur={formik.handleBlur}
            item={formik.errors.fullName}
        />
        </div>
        <div>
            <b>Looking for a job</b>: <Input  {...formik.getFieldProps('lookingForAJob')}
                                              onBlur={formik.handleBlur}
                                              item={formik.errors.lookingForAJob ? "yes" : "no"}
                                              type="checkbox"/>
        </div>
        {!!profileInfo.lookingForAJob &&
            <div>
                <b>My professional skills</b>:
                <Textarea {...formik.getFieldProps('lookingForAJobDescription')}
                          onBlur={formik.handleBlur}
                          item={formik.errors.lookingForAJobDescription}
                />
            </div>
        }
        <div>
            <b>About me</b>: <Textarea {...formik.getFieldProps('aboutMe')}
                                       onBlur={formik.handleBlur}
                                       item={formik.errors.aboutMe ? "yes" : "no"}
        />
        </div>
        <div>
            <b>Contacts</b>:
            <b>Facebook</b>: <Textarea {...formik.getFieldProps('contacts.facebook')}
                                       onBlur={formik.handleBlur} item={formik.errors.contacts?.facebook}/>
            <b>Website</b>: <Textarea {...formik.getFieldProps('contacts.website')}
                                      onBlur={formik.handleBlur} item={formik.errors.contacts?.website}/>
            <b>Vk</b>: <Textarea {...formik.getFieldProps('contacts.vk')}
                                 onBlur={formik.handleBlur} item={formik.errors.contacts?.vk}/>
            <b>Twitter</b>: <Textarea {...formik.getFieldProps('contacts.twitter')}
                                      onBlur={formik.handleBlur} item={formik.errors.contacts?.twitter}/>
            <b>Instagram</b>: <Textarea {...formik.getFieldProps('contacts.instagram')}
                                        onBlur={formik.handleBlur} item={formik.errors.contacts?.instagram}/>
            <b>Youtube</b>: <Textarea {...formik.getFieldProps('contacts.youtube')}
                                      onBlur={formik.handleBlur} item={formik.errors.contacts?.youtube}/>
            <b>Github</b>: <Textarea {...formik.getFieldProps('contacts.github')}
                                     onBlur={formik.handleBlur} item={formik.errors.contacts?.github}/>
            <b>MainLink</b>: <Textarea {...formik.getFieldProps('contacts.mainLink')}
                                       onBlur={formik.handleBlur} item={formik.errors.contacts?.mainLink}/>
        </div>
    </form>
}

type ContactPropsType = {
    contactTitle: any
    contactValue: any
}
export const Contact = (props: ContactPropsType) => {
    return <div className={style.contact}><b>{props.contactTitle}</b>: {props.contactValue}</div>
}
