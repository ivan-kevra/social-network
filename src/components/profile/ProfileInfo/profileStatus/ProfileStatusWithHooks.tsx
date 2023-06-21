import React, {ChangeEvent, useState} from 'react';

export const ProfileStatusWithHooks = (props: any) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    const activateEditMode = () => {
        setEditMode(true)
        setStatus(props.status)
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
                : <span onDoubleClick={activateEditMode}>{props.status ? props.status : 'no status'}</span>

            }
        </div>
    )
}
