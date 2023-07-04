import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusWithHooksPropsType = {
    status: string
    updateStatus: (status: string) => void
}
export const ProfileStatusWithHooks = (props: ProfileStatusWithHooksPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activateEditMode = () => {
        setEditMode(true)
    }
    const activateViewMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const changeStatusHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.currentTarget.value)
    }
    return (
        <div>
            {editMode
                ? <input onBlur={activateViewMode} value={status} autoFocus onChange={changeStatusHandler}/>
                : <div>
                    <b>Status</b>: <span onDoubleClick={activateEditMode}>{status ? status : 'no status'}</span>
                </div>
            }
        </div>
    )
}
